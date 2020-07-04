import _ from "lodash";
import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM,
} from "../actions/types";

export default (streams = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
			return {
				...streams,
				[action.payload.id]: action.payload,
			};
		case CREATE_STREAM:
			return {
				...streams,
				[action.payload.id]: action.payload,
			};
		case EDIT_STREAM:
			return {
				...streams,
				[action.payload.id]: action.payload,
			};
		case DELETE_STREAM:
			return _.omit(streams, action.payload);
		case FETCH_STREAMS:
			return { ...streams, ..._.mapKeys(action.payload, "id") };
		default:
			return streams;
	}
};
