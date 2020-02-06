import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects, fetchUserProjects} from "../actions/projectsActions";
import {useHistory} from "react-router-dom";
import {Button, CircularProgress, Grid} from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const Home = () => {
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
                    {projects.map(project => <ProjectCard key={project.id} project={project} />)}
                </Grid>
            )}
        </>
    );
};

export default Home;