import { setError, setLoading } from './ui.actions';
import { issuesPriorityService, githubApiService } from '../services';

export const GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';

export const INCREASE_PRIORITY = 'INCREASE_PRIORITY';
export const DECREASE_PRIORITY = 'DECREASE_PRIORITY';

export const GET_ISSUES_PRIORITIES = 'GET_ISSUES_PRIORITIES';
export const SET_ISSUES_PRIORITIES = 'SET_ISSUES_PRIORITIES';

export const getIssues = repoName => async (dispatch, getState) => {
    const { user } = getState();

    dispatch({ type: GET_ISSUES_REQUEST });
    dispatch(setLoading(true));

    try {
        const body = await githubApiService(`repos/${user.githubUsername}/${repoName}/issues`, user.apiKey);

        dispatch({
            type: GET_ISSUES_SUCCESS,
            payload: body
        });
        dispatch(setLoading(false));
        dispatch(getIssuesPriorities(repoName));

    } catch(error) {
        dispatch({
			type: GET_ISSUES_FAILURE
        });
        dispatch(setLoading(false));
        dispatch(setError(`There was an error retrieving your issues. ${error}`));
    }
};

export const increasePriority = issueId => dispatch => {
    dispatch({ type: INCREASE_PRIORITY, payload: { issueId }});
    dispatch(setIssuesPriorities());
};

export const decreasePriority = issueId => dispatch => {
    dispatch({ type: DECREASE_PRIORITY, payload: { issueId }});
    dispatch(setIssuesPriorities());
};

export const getIssuesPriorities = repoName => dispatch => {
    const issuesPriorities = JSON.parse(issuesPriorityService.get(repoName));
    if (issuesPriorities) {
        dispatch({ type: GET_ISSUES_PRIORITIES, payload: { issuesPriorities }});
        dispatch(setIssuesPriorities());
    }
};

export const setIssuesPriorities = () => (dispatch, getState) => {
    const { issues } = getState();
    issuesPriorityService.set(issues);
    dispatch({ type: SET_ISSUES_PRIORITIES });
};
