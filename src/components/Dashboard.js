import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { fetchUserProjects } from '../actions/projectsActions';

import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {
    const projects = useSelector(state => state.projects);
    const isFetching = useSelector(state => state.isFetching);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProjects());
  }, [dispatch]);

  return (
    <>
      <h1>All Projects</h1>
      {!isFetching && projects && (
        <Grid container spacing={4}>
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </Grid>
      )}
    </>
  );
};

export default Dashboard;