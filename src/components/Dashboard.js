import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Button } from '@material-ui/core';
import { fetchProjects } from '../actions/projectsActions';

import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {
    const projects = useSelector(state => state.projects);
    const isFetching = useSelector(state => state.isFetching);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  
  let history = useHistory();

  return (
    <>
      <h1>My Projects</h1>
      <Button onClick={() => history.push('/addproject')}>Add Project</Button><br />
      {isFetching && (
        <CircularProgress />
      )}
      {!isFetching && projects && (
        <Grid container spacing={4}>
          {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
        </Grid>
      )}
    </>
  );
};

export default Dashboard;