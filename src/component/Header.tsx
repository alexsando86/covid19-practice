import React from "react";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<>
			<Flex justifyContent="space-between" alignItems="center">
				<img className={styles.covid19} src="./images/alex.jpg" alt="alex" width="60px" />
				<nav>
					<ul className={styles.nav}>
						<li>
							<Link to="/">코로나19 감염 현황</Link>
						</li>
						<li>
							<Link to="/SidoInfoState">시·도발생 현황</Link>
						</li>
						<li>
							<Link to="/GenAgeCaseInfo">연령별·성별감염 현황</Link>
						</li>
						<li>
							<Link to="/NatInfoState">해외발생 현황</Link>
						</li>
					</ul>
				</nav>
			</Flex>
		</>
	);
};

export default Header;
