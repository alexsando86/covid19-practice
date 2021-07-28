import { Box, Grid, useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { Line, Pie } from "react-chartjs-2";

const Covid19StateChart = ({ STATE_DT, DECIDE_CNT, TODAY_DATE }: any) => {
	const lineGraph = useColorModeValue("rgba(229, 229, 229)", "rgba(255,255,255,0.5)");
	const ticksColor = useColorModeValue("gray.200", "#fff");

	type dataTypes = {
		labels: string[];
		datasets: {
			label: string;
			data: number[];
			backgroundColor: string[];
			borderColor: string[];
			borderWidth: number;
		}[];
	};

	const data: dataTypes = {
		labels: STATE_DT && STATE_DT.map((date: number): string => `${date.toString().slice(4).substring(0, 2)}/${date.toString().slice(4).substring(2)}`),
		datasets: [
			{
				label: "누적 확진자수",
				data: DECIDE_CNT,
				backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
				borderWidth: 1,
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				// display: false,
				labels: {
					color: ticksColor,
				},
			},
		},
		scales: {
			xAxis: {
				grid: {
					borderColor: lineGraph,
					color: lineGraph,
				},
				ticks: {
					color: ticksColor,
				},
			},
			yAxis: {
				ticks: {
					color: ticksColor,
				},
				grid: {
					borderColor: lineGraph,
					color: lineGraph,
				},
			},
		},
		// responsive: false,
		maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
	};

	const { decideCnt, clearCnt, careCnt, deathCnt } = TODAY_DATE[0];

	const pieData = {
		labels: ["확진자 수", "격리해제 수", "치료중 환자 수", "사망자 수"],
		datasets: [
			{
				label: moment(new Date()).format("YYYY-MM-DD"),
				data: [decideCnt, clearCnt, careCnt, deathCnt],
				backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
				borderWidth: 1,
			},
		],
	};
	const pieOptions = {
		plugins: {
			legend: {
				// display: false,
				labels: {
					color: ticksColor,
				},
			},
		},
		scales: {
			xAxis: {
				grid: {
					borderColor: lineGraph,
					color: lineGraph,
					drawTicks: false,
				},
				ticks: {
					// display: false,
				},
			},
			yAxis: {
				grid: {
					borderColor: lineGraph,
					color: lineGraph,
					drawTicks: false,
				},
				ticks: {
					display: false,
				},
			},
		},
		maintainAspectRatio: false,
	};

	return (
		<Grid templateRows="repeat(2,1fr)" w="100%" h="100%">
			<Box p={4}>
				<Line data={data} options={options} />
			</Box>
			<Box p={4}>
				<Pie data={pieData} options={pieOptions} />
			</Box>
		</Grid>
	);
};

export default Covid19StateChart;
