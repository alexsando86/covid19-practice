import { createPromiseThunk } from "../asyncGetData";

const COVID19INFO = "COVID19INFO";
const COVID19INFO_PENDING = "COVID19INFO_PENDING";
const COVID19INFO_SUCCESS = "COVID19INFO_SUCCESS";

export const covid19InfoDispatch: any = createPromiseThunk(COVID19INFO);

export type covid19InfoTypes = {
	data: [
		{
			accDefRate: number;
			accExamCnt: number;
			accExamCompCnt: number;
			careCnt: number;
			clearCnt: number;
			createDt: string;
			deathCnt: number;
			decideCnt: number;
			examCnt: number;
			resutlNegCnt: number;
			seq: number;
			stateDt: number;
			stateTime: string;
			updateDt: string;
		}
	];
};

const initialState: covid19InfoTypes = {
	data: [
		{
			accDefRate: 0,
			accExamCnt: 0,
			accExamCompCnt: 0,
			careCnt: 0,
			clearCnt: 0,
			createDt: "",
			deathCnt: 0,
			decideCnt: 0,
			examCnt: 0,
			resutlNegCnt: 0,
			seq: 0,
			stateDt: 0,
			stateTime: "",
			updateDt: "",
		},
	],
};

const covid19InfoData = (state = initialState, action: any) => {
	switch (action.type) {
		case COVID19INFO_PENDING:
			return {
				...state,
			};
		case COVID19INFO_SUCCESS:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default covid19InfoData;
