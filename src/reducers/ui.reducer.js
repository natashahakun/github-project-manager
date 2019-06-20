import * as type from '../actions/ui.actions';

const INITIAL_STATE = {
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case type.SET_ERROR:
			return {
				...state,
				error: action.payload
            }
        case type.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
		default:
			return state;
	}
 }