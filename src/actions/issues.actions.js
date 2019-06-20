import { setError, setLoading } from './ui.actions';

export const GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';

export const getIssues = repoURL => async (dispatch, getState) => {
    const { user } = getState();

    dispatch({ type: GET_ISSUES_REQUEST });
    dispatch(setLoading(true));

    try {
        const url = `${repoURL}/issues`;
        const headers = new Headers();
        headers.append('Authorization', `token ${user.apiKey}`)
        const response = await fetch(url, {
            headers: headers
        });

        const body = await response.json();
        if (response.status !== 200) {
            throw new Error(body.message)
        }

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
        dispatch(setError(`There was an error retrieving your issues: ${error}`));
    }
};