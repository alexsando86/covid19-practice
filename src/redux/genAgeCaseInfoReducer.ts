import { createPromiseThunk } from "../asyncGetData";

const GENAGECASEINFO = "GENAGECASEINFO";
const GENAGECASEINFO_SUCCESS = "GENAGECASEINFO_SUCCESS";

export const genAgeCaseInfoDispatch: any = createPromiseThunk(GENAGECASEINFO);

const initialState = {
	data: null,
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
