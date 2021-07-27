import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Box, Grid, useColorModeValue } from "@chakra-ui/react";

const SidoInfoStateChart = ({ DEF_CNT, GUBUN }: any) => {
	type itemTypes = {
		createDt: string;
		deathCnt: number;
		defCnt: number;
		gubun: string;
		gubunCn: string;
		gubunEn: string;
		incDec: number;
		isolClearCnt: number;
		isolIngCnt: number;
		localOccCnt: number;
		overFlowCnt: number;
		qurRate: string;
		seq: number;
		stdDay: string;
	};

	// Random Color
	let colorArray: string[] = [];
	const randomColor = () => Math.floor(Math.random() * 255);
	const setRgbaColor = (count: number) => {
		for (let i = 0; i < count; i++) {
			colorArray.push(`rgba(${randomColor()},${randomColor()},${randomColor()}, 0.7)`);
		}
	};
	setRgbaColor(DEF_CNT?.length);

	type dataTypes = {
		labels: string[];
		datasets: {
			label: string[] | string;
			data: number[];
			backgroundColor: string[];
			borderWidth: number;
		}[];
	};

	const data: dataTypes = {
		labels: GUBUN,
		datasets: [
			{
				label: GUBUN,
				data: DEF_CNT?.filter((filItem: itemTypes) => filItem.gubun !== "합계").map((item: itemTypes) => item.defCnt),
				backgroundColor: colorArray,
				borderWidth: 1,
			},
		],
	};

	const lineGraph = useColorModeValue("rgba(229, 229, 229)", "rgba(255,255,255,0.5)");
	const ticksColor = useColorModeValue("gray.200", "#fff");

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
				grid: {
					borderColor: lineGraph,
					color: lineGraph,
				},
				ticks: {
					color: ticksColor,
				},
			},
		},
		maintainAspectRatio: false,
	};

	const barData: dataTypes = {
		labels: GUBUN,
		datasets: [
			{
				label: "지역별 현황",
				data: DEF_CNT?.filter((filItem: itemTypes) => filItem.gubun !== "합계").map((item: itemTypes) => item.defCnt),
				backgroundColor: colorArray,
				borderWidth: 1,
			},
		],
	};

	const barOptions = {
		plugins: {
			legend: {
				display: false, // label 숨기기
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
		maintainAspectRatio: false,
	};

	return (
		<Grid templateRows="repeat(2,1fr)" w="100%" h="100%">
			<Box p={4}>
				<Doughnut data={data} options={options} />
			</Box>
			<Box p={4}>
				<Bar data={barData} options={barOptions} />
			</Box>
		</Grid>
	);
};

export default SidoInfoStateChart;
