import React from "react";
import { Box, Flex, Grid, Heading, SimpleGrid } from "@chakra-ui/react";

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
			<SimpleGrid minChildWidth="375px" gap={6} w="100%" h="100%" p={4} overflow={{ md: "hidden" }}>
				{children instanceof Array &&
					children.map((child, index) => (
						<Flex alignItems="center" key={index} w="100%" h="100%" p={4} boxShadow="base" overflow={{ md: "hidden" }}>
							{child}
						</Flex>
					))}
			</SimpleGrid>
		</>
	);
};

export default Layout;
