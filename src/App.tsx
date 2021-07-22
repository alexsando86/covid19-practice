import * as React from "react";
import { Box, ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useEffect, useState } from "react";
import Header from "./component/Header";
import "./index.css";
import Footer from "./component/Footer";
import { Route } from "react-router-dom";
import Covid19State from "./component/pages/Covid19State";
import SidoInfoState from "./component/pages/SidoInfoState";

export const App = () => {
	useEffect(() => {
		// 코로나19해외발생 현황 상세설명
		// dispatch(
		// 	overseasDispatch({
		// 		url: "/openapi/service/rest/Covid19/getCovid19NatInfStateJson",
		// 		setLoadingState,
		// 	})
		// );
		// 코로나19 시·도발생 현황
		// dispatch(
		// 	sidoInfoDispatch({
		// 		url: "/openapi/service/rest/Covid19/getCovid19SidoInfStateJson",
		// 		setLoadingState,
		// 	})
		// );
		// 코로나19 연령별·성별감염 현황
		// dispatch(
		// 	genAgeCaseInfoDispatch({
		// 		url: "/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson",
		// 		setLoadingState,
		// 	})
		// );
		// 코로나19 감염 현황
		// dispatch(
		// 	covid19InfoDispatch({
		// 		url: "/openapi/service/rest/Covid19/getCovid19InfStateJson",
		// 		setLoadingState,
		// 	})
		// );
		// const { covid19InfooReducer, genAgeCaseInfoReducer, overseasReducer, sidoInfoReducer } = useSelector((state: any) => ({
		// 	covid19InfooReducer: state.covid19InfooReducer.data,
		// 	genAgeCaseInfoReducer: state.genAgeCaseInfoReducer,
		// 	overseasReducer: state.overseasReducer,
		// 	sidoInfoReducer: state.sidoInfoReducer,
		// }));
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Flex flexDirection="column" w="100vw" h="100vh">
				<Flex justifyContent="space-between" alignItems="center" px={4} borderBottomWidth="1px" borderColor="gray.200" boxShadow="md">
					<Header />
					<ColorModeSwitcher />
				</Flex>

				<Route path="/" exact component={Covid19State} />
				<Route path="/SidoInfoState" component={SidoInfoState} />

				<Footer />
			</Flex>
		</ChakraProvider>
	);
};
