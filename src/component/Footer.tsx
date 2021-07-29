import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Box p={4} align="center" style={{ display: "none" }} display={{ md: "block !important" }} fontSize="sm">
			제공: 공공데이터포털 (
			<a href="https://www.data.go.kr/index.do" target="_blank" rel="noreferrer">
				https://www.data.go.kr/index.do
			</a>
			)<p>2021-07-19 ~ 2021-07-29</p>
			<p>CREATOR: ALEXSANDO</p>
		</Box>
	);
};

export default Footer;
