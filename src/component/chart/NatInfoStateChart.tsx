import React from "react";
import { Bar } from "react-chartjs-2";

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

	const data: dataTypes = {
		labels: NATIONAL_NAME,
		datasets: [
			{
				axis: "y",
				label: "My First Dataset",
				data: NATIONAL_DATA,
				fill: false,
				backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
				borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
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
		maintainAspectRatio: false,
	};

	return <Bar data={data} options={options} />;
};

export default NatInfoStateChart;
