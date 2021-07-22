import { createPromiseThunk } from "../asyncGetData";

const SIDOINFO = "SIDOINFO";
const SIDOINFO_SUCCESS = "SIDOINFO_SUCCESS";

export const sidoInfoDispatch: any = createPromiseThunk(SIDOINFO);

type sidoDataTypes = {};

const initialState = {
	data: null,
};

const getSIDOINFOData = (state = initialState, action: any) => {
	switch (action.type) {
		case SIDOINFO_SUCCESS:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default getSIDOINFOData;
