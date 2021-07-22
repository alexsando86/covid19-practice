import React from "react";
import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<>
			<Flex justifyContent="space-between" alignItems="center">
				<img className={styles.covid19} src="./images/covid19.jpg" alt="" width="180px" />
				<nav>
					<ul className={styles.nav}>
						<li>
							<Link to="/">코로나19 감염 현황</Link>
						</li>
						<li>
							<Link to="/SidoInfoState">시·도발생 현황</Link>
						</li>
						<li>
							<Link to="/genAgeCaseInfo">연령별·성별감염 현황</Link>
						</li>
						<li>해외발생 현황</li>
					</ul>
				</nav>
			</Flex>
		</>
	);
};

export default Header;
