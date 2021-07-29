import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Bar } from "react-chartjs-2";
import MakeRandomColor from "../../util/MakeRandomColor";

type dataTypes = {
	labels: string[];
	datasets: {
		axis: string;
		label: string[] | string;
		data: number[];
		fill: boolean;
		backgroundColor: string[];
		borderColor: string[];
		borderWidth: number;
	}[];
};

const NatInfoStateChart = ({ CREATE_DT }: any) => {
	const NATIONAL = CREATE_DT.filter((item: any) => item.nationNm === "한국" || item.nationNm === "대만" || item.nationNm === "중국" || item.nationNm === "베트남" || item.nationNm === "일본" || item.nationNm === "뉴질랜드" || item.nationNm === "태국");

	const NATIONAL_DATA = NATIONAL.map((item: any) => item.natDefCnt);
	const NATIONAL_NAME = NATIONAL.map((item: any) => item.nationNm);

	const lineGraph = useColorModeValue("rgba(229, 229, 229)", "rgba(255,255,255,0.5)");
	const ticksColor = useColorModeValue("gray.200", "#fff");

	const setRandomColor = new MakeRandomColor(NATIONAL.length);

	const data: dataTypes = {
		labels: NATIONAL_NAME,
		datasets: [
			{
				axis: "y",
				label: "확진자 수",
				data: NATIONAL_DATA,
				fill: false,
				backgroundColor: setRandomColor.setRgbaColor(),
				borderColor: setRandomColor.setRgbaColor(),
				borderWidth: 1,
			},
		],
	};

	const options = {
		indexAxis: "y",
		plugins: {
			legend: {
				display: false,
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

	return <Bar data={data} options={options} />;
};

export default NatInfoStateChart;
