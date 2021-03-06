import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import StreamReducer from "./StreamReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
	auth: AuthReducer,
	streams: StreamReducer,
	form: formReducer,
});
