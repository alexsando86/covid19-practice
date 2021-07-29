import React, { useEffect, useState } from "react";
import { Flex, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Heading, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import moment from "moment";
import Covid19StateChart from "../chart/Covid19StateChart";
import { covid19InfoDispatch } from "../../redux/covid19InfooReducer";
import SpinnerBox from "../SpinnerBox";
import styles from "./Covid19State.module.css";
import { getToday, getYesterday } from "../../asyncGetData";

const Covid19State = () => {
	const { covid19InfooReducer } = useSelector((state: any) => ({ covid19InfooReducer: state.covid19InfooReducer.data }));

	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const setLoadingState = (state: boolean) => {
		setIsLoading(state);
	};

	const STATE_DT =
		covid19InfooReducer &&
		covid19InfooReducer
			.map((item: any) => item.stateDt)
			.sort((a: number, b: number) => a - b)
			.slice(-15);

	const DECIDE_CNT =
		covid19InfooReducer &&
		covid19InfooReducer
			.map((item: any) => item.decideCnt)
			.sort((a: number, b: number) => a - b)
			.slice(-15);

	const TODAY_DATE = covid19InfooReducer && covid19InfooReducer.filter((item: { createDt: string }) => moment(item.createDt).format("YYYYMMDD") === getToday || moment(item.createDt).format("YYYYMMDD") === getYesterday);

	useEffect(() => {
		// 코로나19 감염 현황
		dispatch(
			covid19InfoDispatch({
				url: "getCovid19InfStateJson",
				setLoadingState,
			})
		);
	}, []);

	// stateDt기준 데이터정렬 가공
	const DECIDE_CNT_TODAY =
		covid19InfooReducer &&
		covid19InfooReducer
			.map((item: any) => item)
			.sort((a: any, b: any) => a.stateDt - b.stateDt)
			.slice(-15)
			.reverse();

	// 오늘확진자 수
	const CONFIRMED_CASE = DECIDE_CNT_TODAY?.find((item: { stateDt: number }) => item.stateDt.toString() === moment(new Date()).format("YYYYMMDD"));
	const YESTERDAY_CONFIRMED_CASE = DECIDE_CNT_TODAY?.find((item: { stateDt: number }) => item.stateDt.toString() === (Number(moment(new Date()).format("YYYYMMDD")) - 1).toString());
	const TODAY_CONFIRMED_CASE = CONFIRMED_CASE?.decideCnt - YESTERDAY_CONFIRMED_CASE?.decideCnt;

	return (
		<>
			{isLoading && <SpinnerBox />}
			{!isLoading && (
				<Layout title="감염 현황">
					<Covid19StateChart STATE_DT={STATE_DT} DECIDE_CNT={DECIDE_CNT} TODAY_DATE={TODAY_DATE} />
					<Flex flexDirection="column" w="100%" h="100%">
						<Heading size="md" mb={4}>
							누적 데이터
						</Heading>
						<Box h="100%" overflow="hidden" overflowY="auto" flex="1">
							<Table variant="striped" size="sm" flex="1">
								<TableCaption fontSize="md">{isNaN(TODAY_CONFIRMED_CASE) ? "매일 오전 10시 이후에 데이터 업데이트됩니다." : `오늘 확진자 수 : ${TODAY_CONFIRMED_CASE.toLocaleString()}명`}</TableCaption>
								<Thead>
									<Tr>
										<Th className={styles.th}>기준일</Th>
										<Th className={styles.th}>확진자 수</Th>
										<Th className={styles.th}>격리해제 수</Th>
										<Th className={styles.th}>치료중 환자 수</Th>
										<Th className={styles.th}>사망자 수</Th>
										<Th className={styles.th}>확진률</Th>
									</Tr>
								</Thead>
								<Tbody>
									{DECIDE_CNT_TODAY &&
										DECIDE_CNT_TODAY.map((item: any) => (
											<Tr key={item.stateDt}>
												<Td>{moment(item.stateDt.toString()).format("YYYY-MM-DD")}</Td>
												<Td>{item.decideCnt.toLocaleString()}</Td>
												<Td>{item.clearCnt.toLocaleString()}</Td>
												<Td>{item.careCnt.toLocaleString()}</Td>
												<Td>{item.deathCnt.toLocaleString()}</Td>
												<Td>{Number(item.accDefRate).toFixed(2)}</Td>
											</Tr>
										))}
								</Tbody>
							</Table>
						</Box>
					</Flex>
				</Layout>
			)}
		</>
	);
};

export default Covid19State;
