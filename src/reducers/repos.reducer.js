import * as type from '../actions/repos.actions';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.GET_REPOS_REQUEST:
            return [
                ...state
            ]
        case type.GET_REPOS_SUCCESS:
            return action.payload.map(({ id, name }) => ({ id, name }))
        case type.GET_REPOS_FAILURE:
            return [
                ...state,
            ]
        default:
            return state;
    }
 }