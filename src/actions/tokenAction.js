import * as constants from '../constants';

export const getToken = (token) => ({
	type: constanst.GET_TOKEN,
	payload: token
});
