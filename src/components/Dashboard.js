import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress, Container, Grid } from '@material-ui/core';
import { fetchProjects} from "../actions/projectsActions";

import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {
    const projects = useSelector(state => state.projects);
    const isFetching = useSelector(state => state.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <>
            <Container maxWidth="md">
                <h1>My Projects</h1>
                {isFetching && (
                    <CircularProgress />
                )}
                {!isFetching && projects && (
                    <Grid container spacing={4}>
                        {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
                    </Grid>
                )}
            </Container>
        </>
    );
};

export default Dashboard;