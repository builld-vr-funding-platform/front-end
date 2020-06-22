// reducers/index.js

import {
  FETCH_PROJECTS_START,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from '../actions/projectsActions';

const initialState = {
  projects: null,
  isFetching: false,
  error: '',
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        isFetching: false,
      };

    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default projectsReducer;
