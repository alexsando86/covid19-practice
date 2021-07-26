import React from "react";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<>
			<Flex className={styles.nav} justifyContent="space-between" alignItems="center" flexDirection={{ md: "row" }} fontSize={{ md: "15px" }}>
				<img className={styles.covid19} src="./images/alex.jpg" alt="alex" width="60px" />
				<nav>
					<ul>
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
