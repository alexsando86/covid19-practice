import { createPromiseThunk } from "../asyncGetData";

const OVERSEAS = "OVERSEAS";
const OVERSEAS_SUCCESS = "OVERSEAS_SUCCESS";

export const overseasDispatch: any = createPromiseThunk(OVERSEAS);

const initialState = {
	data: null,
};

const getOverseasData = (state = initialState, action: any) => {
	switch (action.type) {
		case OVERSEAS_SUCCESS:
			console.log(state);
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default getOverseasData;
