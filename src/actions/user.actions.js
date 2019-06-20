import { setError, setLoading } from './ui.actions';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUser = apiKey => async dispatch => {
    dispatch({ type: GET_USER_REQUEST });
    dispatch(setLoading(true));

    try {
        const url = 'https://api.github.com/user';
        const headers = new Headers();
        headers.append('Authorization', `token ${apiKey}`)
        const response = await fetch(url, {
            headers: headers
        });

        const body = await response.json();
        if (response.status !== 200) {
            throw new Error(body.message)
        }

        dispatch({
			type: GET_USER_SUCCESS, 
			payload: {
                apiKey: apiKey,
                githubUsername: body.login
            } 
        });
        dispatch(setLoading(false));

    } catch(error) {
        dispatch({
			type: GET_USER_FAILURE
        });
        dispatch(setLoading(false));
        dispatch(setError(`There was an error retrieving your information: ${error}`));
    }
};
