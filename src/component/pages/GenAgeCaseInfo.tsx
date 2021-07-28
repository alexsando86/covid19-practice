import React, { useEffect, useState } from "react";
import { Flex, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Heading, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import GenAgeCaseInfoChart from "../chart/GenAgeCaseInfoChart";
import Layout from "../Layout";
import SpinnerBox from "../SpinnerBox";
import { genAgeCaseInfoDispatch } from "../../redux/genAgeCaseInfoReducer";
import moment from "moment";
import styles from "./GenAgeCaseInfo.module.css";

type genAgeTypes = {
	confCase: number;
	confCaseRate: number;
	createDt: string;
	criticalRate: number;
	death: number;
	deathRate: number;
	gubun: string;
	seq: number;
};

const GenAgeCaseInfo = () => {
	const { genAgeCaseInfoReducer } = useSelector((state: any) => ({ genAgeCaseInfoReducer: state.genAgeCaseInfoReducer.data }));

	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const setLoadingState = (state: boolean) => {
		setIsLoading(state);
	};

	const CREACT_DT =
		genAgeCaseInfoReducer &&
		genAgeCaseInfoReducer
			.map((date: genAgeTypes) => date)
			.sort((a: genAgeTypes, b: genAgeTypes) => Number(moment(a.createDt).format("YYYYMMDD")) - Number(moment(b.createDt).format("YYYYMMDD")))
			.slice(-11);

	useEffect(() => {
		// 코로나19 연령별·성별감염 현황
		dispatch(
			genAgeCaseInfoDispatch({
				url: "getCovid19GenAgeCaseInfJson",
				setLoadingState,
			})
		);
	}, []);

	return (
		<>
			{isLoading && <SpinnerBox />}
			{!isLoading && (
				<Layout title="연령별·성별감염 현황">
					<GenAgeCaseInfoChart genAgeCaseInfoReducer={genAgeCaseInfoReducer && genAgeCaseInfoReducer} CREACT_DT={CREACT_DT} />
					<Flex flexDirection="column" w="100%" h="100%">
						<Heading size="md" mb={4}>
							누적 데이터
						</Heading>

						<Box h="100%" overflow="hidden" overflowY="auto" flex="1">
							<Table variant="striped" size="sm" w="100%">
								<TableCaption fontSize="md"></TableCaption>
								<Thead>
									<Tr>
										<Th className={styles.th}>구분(성별, 연령별)</Th>
										<Th className={styles.th}>확진자</Th>
										<Th className={styles.th}>확진률</Th>
										<Th className={styles.th}>사망자</Th>
										<Th className={styles.th}>사망률</Th>
										<Th className={styles.th}>치명률</Th>
									</Tr>
								</Thead>
								<Tbody>
									{CREACT_DT?.map((genAge: genAgeTypes) => {
										const { gubun, confCase, confCaseRate, death, deathRate, criticalRate } = genAge;
										const genAgeType = gubun.indexOf("남성") > -1 || gubun.indexOf("여성") > -1 || gubun.indexOf("80 이상") > -1 ? gubun : `${gubun}세`;
										return (
											<Tr key={gubun}>
												<Td>{genAgeType}</Td>
												<Td>{confCase.toLocaleString()}</Td>
												<Td>{confCaseRate.toLocaleString()}</Td>
												<Td>{death.toLocaleString()}</Td>
												<Td>{deathRate.toLocaleString()}</Td>
												<Td>{criticalRate.toLocaleString()}</Td>
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

export default GenAgeCaseInfo;
