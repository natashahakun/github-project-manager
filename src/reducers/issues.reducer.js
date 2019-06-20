import * as type from '../actions/issues.actions';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.GET_ISSUES_REQUEST:
            return [
                ...state
            ]
        case type.GET_ISSUES_SUCCESS:
            return [
                ...action.payload
            ]
        case type.GET_ISSUES_FAILURE:
            return [
                ...state,
            ]
        default:
            return state;
    }
 }