import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Box p={4} align="center">
			제공: 공공데이터포털 (
			<a href="https://www.data.go.kr/index.do" target="_blank">
				https://www.data.go.kr/index.do
			</a>
			)<p>Copyright © alexsando. All Rights Reserved.</p>
		</Box>
	);
};

export default Footer;
