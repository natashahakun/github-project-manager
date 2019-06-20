import * as type from '../actions/user.actions';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.GET_USER_REQUEST:
            return {
                ...state
            }
        case type.GET_USER_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case type.GET_USER_FAILURE:
            return {
                ...state,
            }
        default:
            return state;
    }
 }