import { setError, setLoading } from './ui.actions';

export const GET_REPOS_REQUEST = 'GET_REPOS_REQUEST';
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_REPOS_FAILURE = 'GET_REPOS_FAILURE';

export const getRepos = () => async (dispatch, getState) => {
    const { user } = getState();

    dispatch({ type: GET_REPOS_REQUEST });
    dispatch(setLoading(true));

    try {
        const url = `https://api.github.com/users/${user.githubUsername}/repos`;
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
            type: GET_REPOS_SUCCESS,
            payload: body.map(({ id, name, url }) => ({ id, name, url }))
        });
        dispatch(setLoading(false));

    } catch(error) {
        dispatch({
			type: GET_REPOS_FAILURE
        });
        dispatch(setLoading(false));
        dispatch(setError(`There was an error retrieving your repositories: ${error}`));
    }
};
