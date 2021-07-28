import React, { useEffect, useState } from "react";
import { Flex, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import moment from "moment";
import SidoInfoStateChart from "../chart/SidoInfoStateChart";
import { sidoInfoDispatch } from "../../redux/sidoInfoReducer";
import SpinnerBox from "../SpinnerBox";

export type sidoItemTypes = {
	createDt: string;
	deathCnt: number;
	defCnt: number;
	gubun: string;
	gubunCn: string;
	gubunEn: string;
	incDec: number;
	isolClearCnt: number;
	isolIngCnt: number;
	localOccCnt: number;
	overFlowCnt: number;
	qurRate: string;
	seq: number;
	stdDay: string;
};

const Covid19State = () => {
	const { sidoInfoReducer } = useSelector((state: any) => ({ sidoInfoReducer: state.sidoInfoReducer.data }));

	const DEF_CNT = sidoInfoReducer
		?.map((item: sidoItemTypes) => item)
		.sort((a: any, b: any) => Number(moment(a.createDt).format("YYYYMMDD")) - Number(moment(b.createDt).format("YYYYMMDD")))
		.slice(-18);

	// 도시명
	const GUBUN = DEF_CNT?.filter((filItem: sidoItemTypes) => filItem.gubun !== "합계").map((item: sidoItemTypes) => item.gubun);

	// 한글소팅
	const hangleSort = DEF_CNT?.map((item: sidoItemTypes) => item).sort((a: sidoItemTypes, b: sidoItemTypes) => {
		const item1 = a.gubun;
		const item2 = b.gubun;
		return item1.localeCompare(item2);
	});

	// 기준날짜
	const currentDay = DEF_CNT?.find((day: { createDt: string }) => moment(day.createDt).format("YYYYMMDD"));

	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const setLoadingState = (state: boolean) => {
		setIsLoading(state);
	};

	useEffect(() => {
		// 코로나19 시·도발생 현황
		dispatch(
			sidoInfoDispatch({
				url: "getCovid19SidoInfStateJson",
				setLoadingState,
			})
		);
	}, []);

	return (
		<>
			{isLoading && <SpinnerBox />}
			{!isLoading && (
				<Layout title="공공데이터활용지원센터_보건복지부 코로나19 시·도발생 현황">
					<SidoInfoStateChart DEF_CNT={DEF_CNT} GUBUN={GUBUN} isLoading={isLoading} sidoInfoReducer={sidoInfoReducer && sidoInfoReducer} />
					<Flex flexDirection="column" w="100%" h="100%">
						<Heading size="md" mb={4}>
							시·도발생 현황
						</Heading>

						<Table variant="striped" size="sm" w="100%" h="100%" flex="1">
							<TableCaption fontSize="md">{`${moment(currentDay?.createDt).format("YYYY-MM-DD")}`}</TableCaption>
							<Thead>
								<Tr>
									<Th>도시명</Th>
									<Th>확진자 수</Th>
									<Th>격리중 환자수</Th>
									<Th>격리 해제 수</Th>
									<Th>전일대비 증감 수</Th>
									<Th>해외유입 수</Th>
									<Th>지역발생 수</Th>
								</Tr>
							</Thead>
							<Tbody>
								{hangleSort?.map((city: sidoItemTypes) => (
									<Tr key={city.gubun}>
										<Td>{city.gubun.toLocaleString()}</Td>
										<Td>{city.defCnt.toLocaleString()}</Td>
										<Td>{city.isolIngCnt.toLocaleString()}</Td>
										<Td>{city.isolClearCnt.toLocaleString()}</Td>
										<Td>{city.incDec.toLocaleString()}</Td>
										<Td>{city.overFlowCnt.toLocaleString()}</Td>
										<Td>{city.localOccCnt.toLocaleString()}</Td>
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
