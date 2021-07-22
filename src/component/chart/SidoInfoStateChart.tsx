import React from "react";
import { Doughnut } from "react-chartjs-2";
import SpinnerBox from "../SpinnerBox";
import moment from "moment";

const SidoInfoStateChart = ({ DEF_CNT, GUBUN, isLoading, sidoInfoReducer }: any) => {
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

	// const DEF_CNT = sidoInfoReducer
	// 	?.map((item: itemTypes) => item)
	// 	.sort((a: any, b: any) => Number(moment(a.createDt).format("YYYYMMDD")) - Number(moment(b.createDt).format("YYYYMMDD")))
	// 	.slice(-18);

	// // 도시명
	// const GUBUN = DEF_CNT?.filter((filItem: itemTypes) => filItem.gubun !== "합계").map((item: itemTypes) => item.gubun);

	// Random Color
	let colorArray: string[] = [];
	const randomColor = () => Math.floor(Math.random() * 255);
	const setRgbaColor = (count: number) => {
		for (let i = 0; i < count; i++) {
			colorArray.push(`rgba(${randomColor()},${randomColor()},${randomColor()}, 0.7)`);
		}
	};
	setRgbaColor(DEF_CNT?.length);

	const data = {
		labels: GUBUN,
		datasets: [
			{
				label: GUBUN,
				data: DEF_CNT?.filter((filItem: itemTypes) => filItem.gubun !== "합계").map((item: itemTypes) => item.defCnt),
				backgroundColor: colorArray,
				// borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
				borderWidth: 1,
			},
		],
	};

	const options = {
		legend: {
			position: "left",
			align: "middle",
		},
		maintainAspectRatio: false,
	};

	return (
		<>
			{isLoading && <SpinnerBox />}
			{!isLoading && <Doughnut data={data} options={options} />}
		</>
	);
};

export default SidoInfoStateChart;
