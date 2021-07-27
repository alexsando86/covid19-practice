import React, { useEffect, useState } from "react";
import { Flex, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import moment from "moment";
import CovidTotalState from "../chart/CovidTotalState";
import { covid19InfoDispatch } from "../../redux/covid19InfooReducer";
import SpinnerBox from "../SpinnerBox";
import { sidoItemTypes } from "./SidoInfoState";
import { sidoInfoDispatch } from "../../redux/sidoInfoReducer";

const Covid19State = () => {
	const { covid19InfooReducer, sidoInfoReducer } = useSelector((state: any) => ({
		covid19InfooReducer: state.covid19InfooReducer.data,
		sidoInfoReducer: state.sidoInfoReducer.data,
	}));

	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const setLoadingState = (state: boolean) => {
		setIsLoading(state);
	};

	useEffect(() => {
		// 코로나19 감염 현황
		dispatch(
			covid19InfoDispatch({
				url: "getCovid19InfStateJson",
				setLoadingState,
			})
		);

		// 코로나19 시·도발생 현황
		dispatch(
			sidoInfoDispatch({
				url: "getCovid19SidoInfStateJson",
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
	const DEF_CNT = sidoInfoReducer
		?.map((item: sidoItemTypes) => item)
		.sort((a: any, b: any) => Number(moment(a.createDt).format("YYYYMMDD")) - Number(moment(b.createDt).format("YYYYMMDD")))
		.slice(-18);
	const INCDEC = DEF_CNT?.filter((filItem: sidoItemTypes) => filItem.gubun === "합계").map((item: sidoItemTypes) => item.incDec);

	return (
		<>
			{isLoading && <SpinnerBox />}
			{!isLoading && (
				<Layout title="공공데이터활용지원센터_보건복지부 코로나19 감염 현황">
					<CovidTotalState covid19InfooReducer={covid19InfooReducer && covid19InfooReducer} />
					<Flex flexDirection="column" w="100%" h="100%">
						<Heading size="md" mb={4}>
							누적 데이터
						</Heading>
						<Table variant="striped" size="sm" flex="1">
							<TableCaption fontSize="md">{isNaN(INCDEC) ? "10시 이후 오늘의 확진자 수 확인 가능합니다." : `오늘 확진자 수 : ${INCDEC.toLocaleString()}명`}</TableCaption>
							<Thead>
								<Tr>
									<Th>기준일</Th>
									<Th>확진자 수</Th>
									<Th>격리해제 수</Th>
									<Th>치료중 환자 수</Th>
									<Th>사망자 수</Th>
									<Th>확진률</Th>
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
					</Flex>
				</Layout>
			)}
		</>
	);
};

export default Covid19State;
