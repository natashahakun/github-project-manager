import * as type from '../actions/issues.actions';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.GET_ISSUES_REQUEST:
            return [
                ...state
            ]
        case type.GET_ISSUES_SUCCESS:
            return action.payload.map((issue, index) => ({ ...issue, priority: index + 1 }));
        case type.GET_ISSUES_FAILURE:
            return [
                ...state,
            ]
        case type.INCREASE_PRIORITY:
            const issueIncreased = state.find(issue => issue.id === action.payload.issueId);
            let issueNegativelyImpacted = state.find(issue => issue.priority === issueIncreased.priority - 1);

            return state.map(issue => {
                if (issue.id === issueIncreased.id) {
                    return { ...issue, priority: issue.priority - 1 };
                } else if (issue.id === issueNegativelyImpacted.id) {
                    return { ...issue, priority: issue.priority + 1 };
                }
                return issue;
            });
        case type.DECREASE_PRIORITY:
            const issueDecreased = state.find(issue => issue.id === action.payload.issueId);
            const issuePositivelyImpacted = state.find(issue => issue.priority === issueDecreased.priority + 1);

            return state.map(issue => {
                if (issue.id === issueDecreased.id) {
                    return { ...issue, priority: issue.priority + 1 };
                } else if (issue.id === issuePositivelyImpacted.id) {
                    return { ...issue, priority: issue.priority - 1 };
                }
                return issue;
            });
        default:
            return state;
    }
 }