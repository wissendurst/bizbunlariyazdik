import { initialState } from "./config";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_LOGIN":
			return { ...state, isLogin: action.payload };

		default:
			return state;
	}
};

export default reducer;
