import { createPromiseThunk } from "../asyncGetData";
import { overSeasTypes } from "../component/pages/NatInfoState";

const OVERSEAS = "OVERSEAS";
const OVERSEAS_SUCCESS = "OVERSEAS_SUCCESS";

export const overseasDispatch: any = createPromiseThunk(OVERSEAS);

const initialState: overSeasTypes = {
	data: [
		{
			areaNm: "",
			areaNmCn: "",
			areaNmEn: "",
			createDt: "",
			natDeathCnt: 0,
			natDeathRate: 0,
			natDefCnt: 0,
			nationNm: "",
			nationNmCn: "",
			nationNmEn: "",
			seq: 0,
			stdDay: "",
			updateDt: "",
		},
	],
};

const getOverseasData = (state = initialState, action: any) => {
	switch (action.type) {
		case OVERSEAS_SUCCESS:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default getOverseasData;
