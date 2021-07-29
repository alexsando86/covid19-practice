import { Box, Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Line, Bar } from "react-chartjs-2";
import MakeRandomColor from "../../util/MakeRandomColor";

const GenAgeCaseInfoChart = ({ CREACT_DT }: any) => {
	const CONF_CASE = CREACT_DT.map((conf: { confCase: number }) => conf.confCase);
	const CONF_CASE_RATE = CREACT_DT.map((conf: { confCaseRate: number }) => conf.confCaseRate);
	const GUBUN = CREACT_DT.map((ctg: { gubun: string }) => ctg.gubun);

	const lineGraph = useColorModeValue("rgba(229, 229, 229)", "rgba(255,255,255,0.5)");
	const ticksColor = useColorModeValue("gray.200", "#fff");

	const setRandomColor = new MakeRandomColor(CREACT_DT.length);

	const data = {
		labels: GUBUN,
		datasets: [
			{
				label: "확진자",
				data: CONF_CASE,
				backgroundColor: setRandomColor.setRgbaColor(),
			},
		],
	};

	const options = {
		indexAxis: "y",
		plugins: {
			legend: {
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

	const lineData = {
		labels: GUBUN,
		datasets: [
			{
				label: "확진률",
				data: CONF_CASE_RATE,
				backgroundColor: setRandomColor.setRgbaColor(),
				borderColor: setRandomColor.setRgbaColor(),
			},
		],
	};

	return (
		<Grid templateRows="repeat(2,1fr)" w="100%" h="100%">
			<Box p={4}>
				<Bar data={data} options={options} />
			</Box>
			<Box p={4}>
				<Line data={lineData} options={options} />
			</Box>
		</Grid>
	);
};

export default GenAgeCaseInfoChart;
