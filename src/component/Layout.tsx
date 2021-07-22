import React from "react";
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";

interface childrenProps {
	children: JSX.Element[] | JSX.Element;
	title: string;
}

const Layout = ({ children, title }: childrenProps) => {
	return (
		<>
			<Heading as="h2" size="md" p={4}>
				{title}
			</Heading>
			<Grid templateColumns="repeat(2, 1fr)" gap={6} h="100%" p={4}>
				{children instanceof Array &&
					children.map((child, index) => (
						<Flex alignItems="center" flex="1" key={index} w="100%" h="100%" p={4} boxShadow="base">
							{child}
						</Flex>
					))}
			</Grid>
		</>
	);
};

export default Layout;
