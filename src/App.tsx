import * as React from "react";
import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Route } from "react-router-dom";
import "./index.css";
import Covid19State from "./component/pages/Covid19State";
import SidoInfoState from "./component/pages/SidoInfoState";
import GenAgeCaseInfo from "./component/pages/GenAgeCaseInfo";

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Flex flexDirection="column" w="100vw" h="100vh">
				<Flex justifyContent="space-between" alignItems="center" px={4} borderBottomWidth="1px" borderColor="gray.200" boxShadow="md">
					<Header />
					<ColorModeSwitcher />
				</Flex>

				<Route path="/" exact component={Covid19State} />
				<Route path="/SidoInfoState" component={SidoInfoState} />
				<Route path="/GenAgeCaseInfo" component={GenAgeCaseInfo} />

				<Footer />
			</Flex>
		</ChakraProvider>
	);
};
