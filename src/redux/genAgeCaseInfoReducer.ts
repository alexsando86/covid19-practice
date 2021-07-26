import { createPromiseThunk } from "../asyncGetData";

const GENAGECASEINFO = "GENAGECASEINFO";
const GENAGECASEINFO_SUCCESS = "GENAGECASEINFO_SUCCESS";

export const genAgeCaseInfoDispatch: any = createPromiseThunk(GENAGECASEINFO);

type genAgeTypes = {
	data: [
		{
			confCase: number;
			confCaseRate: number;
			createDt: string;
			criticalRate: number;
			death: number;
			deathRate: string;
			gubun: string;
			seq: number;
			updateDt: string;
		}
	];
};

const initialState: genAgeTypes = {
	data: [
		{
			confCase: 8915,
			confCaseRate: 4.76,
			createDt: "2021-07-24 14:19:04.902",
			criticalRate: 0,
			death: 0,
			deathRate: "0.00",
			gubun: "0-9",
			seq: 10420,
			updateDt: "null",
		},
	],
};

const genAgeCaseInfoData = (state = initialState, action: any) => {
	switch (action.type) {
		case GENAGECASEINFO_SUCCESS:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default genAgeCaseInfoData;
