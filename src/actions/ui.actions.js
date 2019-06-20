export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';

export const setError = error => dispatch => {
    dispatch({ type: SET_ERROR, payload: error });
    setTimeout(() => dispatch({ type: SET_ERROR, payload: '' }), 5000);
};

export const setLoading = loading => dispatch => {
    dispatch({ type: SET_LOADING, payload: loading});
};
