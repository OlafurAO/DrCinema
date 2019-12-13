import * as constants from '../constants';

export default function(state = 0, action) {
	switch(action.type) {
		case constants.GET_TOKEN:
			return action.payload;
		default:
			return state;
	}
}
