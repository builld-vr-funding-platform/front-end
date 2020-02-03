/* reducers/index.js
** TODO: use combineReducers when we have more than one reducer */ 

const initialState = {
  user_projects: null
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state;
  }
};

export default projectsReducer;