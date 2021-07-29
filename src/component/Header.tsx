import React from "react";
import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<>
			<Flex className={styles.nav} justifyContent="space-between" alignItems="center" display={{ base: "none", md: "flex" }}>
				<img className={styles.covid19} src="./images/alex.jpg" alt="alex" width="60px" />
				<nav>
					<UnorderedList className={styles.ul} flexDirection={{ base: "column", md: "row" }}>
						<ListItem>
							<Link to="/">코로나19 감염 현황</Link>
						</ListItem>
						<ListItem>
							<Link to="/SidoInfoState">시·도발생 현황</Link>
						</ListItem>
						<ListItem>
							<Link to="/GenAgeCaseInfo">연령별·성별감염 현황</Link>
						</ListItem>
						<ListItem>
							<Link to="/NatInfoState">해외발생 현황</Link>
						</ListItem>
					</UnorderedList>
				</nav>
			</Flex>
			<Flex w="100%" className={styles.unList} display={{ md: "none" }}>
				<nav>
					<UnorderedList flexDirection={{ base: "column", md: "row" }}>
						<ListItem>
							<Link to="/">코로나19 감염 현황</Link>
						</ListItem>
						<ListItem>
							<Link to="/SidoInfoState">시·도발생 현황</Link>
						</ListItem>
						<ListItem>
							<Link to="/GenAgeCaseInfo">연령별·성별감염 현황</Link>
						</ListItem>
						<ListItem>
							<Link to="/NatInfoState">해외발생 현황</Link>
						</ListItem>
					</UnorderedList>
				</nav>
			</Flex>
		</>
	);
};

export default Header;
