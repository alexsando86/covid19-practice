import { createPromiseThunk } from "../asyncGetData";

const SIDOINFO = "SIDOINFO";
const SIDOINFO_SUCCESS = "SIDOINFO_SUCCESS";

export const sidoInfoDispatch: any = createPromiseThunk(SIDOINFO);

type sidoDataTypes = {
	data: [
		{
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
			updateDt: string;
		}
	];
};

const initialState: sidoDataTypes = {
	data: [
		{
			createDt: "",
			deathCnt: 0,
			defCnt: 0,
			gubun: "",
			gubunCn: "",
			gubunEn: "",
			incDec: 0,
			isolClearCnt: 0,
			isolIngCnt: 0,
			localOccCnt: 0,
			overFlowCnt: 0,
			qurRate: "",
			seq: 0,
			stdDay: "",
			updateDt: "",
		},
	],
};

const getSIDOINFOData = (state = initialState, action: any) => {
	switch (action.type) {
		case SIDOINFO_SUCCESS:
			console.log(state);
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default getSIDOINFOData;
