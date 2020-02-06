import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios'
export const FETCH_PROJECTS_START = 'FETCH_PROJECTS_START';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const fetchProjects = () => dispatch => {
    dispatch({ type: FETCH_PROJECTS_START });

    axios
        .get('https://sprint-challenge-authenticat.herokuapp.com/api/projects' )
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data});
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
            dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err.response })
        });
};