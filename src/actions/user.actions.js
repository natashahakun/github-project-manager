import { getRepos } from './repos.actions';
import { setError, setLoading } from './ui.actions';
import { githubApiService } from '../services/githubApiService';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUser = apiKey => async dispatch => {
    dispatch({ type: GET_USER_REQUEST });
    dispatch(setLoading(true));

    try {
        const body = await githubApiService('user', apiKey);

        dispatch({
			type: GET_USER_SUCCESS, 
			payload: {
                apiKey: apiKey,
                githubUsername: body.login
            } 
        });
        dispatch(setLoading(false));
        dispatch(getRepos());

    } catch(error) {
        dispatch({
			type: GET_USER_FAILURE
        });
        dispatch(setLoading(false));
        dispatch(setError(`There was an error retrieving your information. ${error}`));
    }
};
