import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_PROJECTS_START = 'FETCH_PROJECTS_START';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

// TODO: remove setTimeout (intended to test fetching state)

export const fetchProjects = () => dispatch => {
    dispatch({ type: FETCH_PROJECTS_START });

    axiosWithAuth()
        .get('crud/read' )
        .then(res => {
            setTimeout(() => {
                dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data.results });
            }, 3000);
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err.response })
        });
};

export const fetchUserProjects = () => dispatch => {
    dispatch({type: FETCH_PROJECTS_START});

    axiosWithAuth()
        .get('/crud/read')
        .then(res => {
            // console.dir(res);
            setTimeout(() => {
                dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
            }, 3000);
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err.response })
        });
};