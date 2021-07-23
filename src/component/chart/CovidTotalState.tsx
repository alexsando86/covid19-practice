import { Line } from "react-chartjs-2";

const CovidTotalState = ({ covid19InfooReducer }: any) => {
	const STATE_DT =
		covid19InfooReducer &&
		covid19InfooReducer
			.map((item: any) => item.stateDt)
			.sort((a: number, b: number) => a - b)
			.slice(-15);

	const DECIDE_CNT =
		covid19InfooReducer &&
		covid19InfooReducer
			.map((item: any) => item.decideCnt)
			.sort((a: number, b: number) => a - b)
			.slice(-15);

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
		legend: {
			display: false, // label 숨기기
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
						stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
					},
				},
			],
		},
		maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
	};

	return <Line data={data} options={options} />;
};

export default CovidTotalState;
