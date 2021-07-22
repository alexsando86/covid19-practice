import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const SpinnerBox = () => {
	return (
		<Flex justifyContent="center" alignItems="center" position="fixed" left="0" right="0" top="0" bottom="0" background="gray.500" opacity="0.7">
			<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="red.500" size="xl" />
		</Flex>
	);
};

export default SpinnerBox;
