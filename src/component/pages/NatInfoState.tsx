import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { overseasDispatch } from "../../redux/overseasReducer";
import NatInfoStateChart from "../chart/NatInfoStateChart";
import Layout from "../Layout";
import SpinnerBox from "../SpinnerBox";
import moment from "moment";
import styles from "./NatInfoState.module.css";

export type overSeasTypes = {
	data: [
		{
			areaNm: string;
			areaNmCn: string;
			areaNmEn: string;
			createDt: string;
			natDeathCnt: number;
			natDeathRate: number;
			natDefCnt: number;
			nationNm: string;
			nationNmCn: string;
			nationNmEn: string;
			seq: number;
			stdDay: string;
			updateDt: string;
		}
	];
};

const NatInfoState = () => {
	const { overseasReducer } = useSelector((state: any) => ({ overseasReducer: state.overseasReducer.data }));
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const setLoadingState = (state: boolean) => {
		setIsLoading(state);
	};

	const CREATE_DT =
		overseasReducer &&
		overseasReducer
			.map((date: overSeasTypes) => date)
			.sort((a: { createDt: string }, b: { createDt: string }) => Number(moment(a.createDt)) - Number(moment(b.createDt)))
			.slice(-190);

	useEffect(() => {
		// 코로나19 시·도발생 현황
		dispatch(
			overseasDispatch({
				url: "getCovid19NatInfStateJson",
				setLoadingState,
			})
		);
	}, []);

	return (
		<>
			{isLoading && <SpinnerBox />}
			{!isLoading && (
				<Layout title="공공데이터활용지원센터_보건복지부 코로나19해외발생 현황">
					<NatInfoStateChart isLoading={isLoading} CREATE_DT={CREATE_DT} />
					<Flex flexDirection="column" w="100%" h="100%">
						<Heading size="md" mb={4}>
							해외발생 현황
						</Heading>

						<Box h="100%" overflow="hidden" overflowY="auto" flex="1">
							<Table variant="striped" size="sm" w="100%" h="100%">
								<TableCaption fontSize="md">코로나19 해외발생 현황</TableCaption>
								<Thead>
									<Tr>
										<Th>국가명</Th>
										<Th>지역명</Th>
										<Th>국가별 확진자 수</Th>
										<Th>국가별 사망자 수</Th>
										<Th>확진률 대비 사망률</Th>
									</Tr>
								</Thead>
								<Tbody>
									{CREATE_DT?.map((item: any) => {
										const { areaNm, natDeathCnt, natDeathRate, natDefCnt, nationNm, nationNmEn } = item;
										return (
											<Tr key={nationNm} className={(nationNm === "일본" && styles.special) || (nationNm === "한국" && styles.special)}>
												<Td>
													{nationNm} ({nationNmEn})
												</Td>
												<Td>{areaNm}</Td>
												<Td>{natDefCnt.toLocaleString()}</Td>
												<Td>{natDeathCnt.toLocaleString()}</Td>
												<Td>{Number(natDeathRate).toFixed(2)}</Td>
											</Tr>
										);
									})}
								</Tbody>
							</Table>
						</Box>
					</Flex>
				</Layout>
			)}
		</>
	);
};

export default NatInfoState;
