import { setError, setLoading } from './ui.actions';
import { githubApiService } from '../services';

export const GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';

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

    } catch(error) {
        dispatch({
			type: GET_ISSUES_FAILURE
        });
        dispatch(setLoading(false));
        dispatch(setError(`There was an error retrieving your issues. ${error}`));
    }
};