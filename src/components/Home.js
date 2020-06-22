import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../actions/projectsActions';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

const Home = () => {
  const projects = useSelector((state) => state.projects);
  const isFetching = useSelector((state) => state.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <>
      <h1>All Projects</h1>
      {!isFetching && projects && (
        <Grid container spacing={4}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
