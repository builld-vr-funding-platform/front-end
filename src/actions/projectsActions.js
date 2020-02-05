import axios from 'axios';

export const FETCH_PROJECTS_START = 'FETCH_PROJECTS_START';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

/* TODO: replace url with our backend API
** TODO: remove setTimeout (intended to test fetching state) */

export const fetchProjects = () => dispatch => {
    dispatch({ type: FETCH_PROJECTS_START });

    axios
        .get('https://api.open5e.com/magicitems')
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