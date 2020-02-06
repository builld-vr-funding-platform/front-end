import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import axiosWithAuth from '../utils/axiosWithAuth';

const useStyles = makeStyles(theme => ({
    editButton: {
        maxWidth: '200px',
        margin: '16px auto'
    },

    editIcon: {
        marginRight: theme.spacing(1)
    }
}))

const ProjectView = () => {
    const classes = useStyles();
    
    let { id } = useParams();
    let history = useHistory();
    
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetchProject(id);
    }, [id]);

    const fetchProject = id => {
        axiosWithAuth()
            .get(`crud/read/${id}`)
            .then(res => {
                // console.dir(res);
                setProject(res.data);
            })
            .catch(err => console.log(err));
    };

  return (
    <>
        {project ? (
            <div className={'projectView'}>
                <div className={'titleHead'}>
                    <h1>{project.name}</h1>
                    <h3>{project.location}</h3>
                    {project.image ? <img src={project.image} alt={project.name} /> : null}
                    <h2>{project.funding_goal}</h2>
                    <h3>Funding received: {project.amount}</h3>
                    <p>{project.description}</p>
                    <h3>{project.email}</h3>
                    <div className={'buttons'}>
                        <button>Invest</button>
                        <button>Make an Offer</button>
                    </div>
                </div>
                <div className={'campaign'}>
                    {project.campaignText}
                    <div className={'buttons'}>
                        <button>Invest</button>
                        <button>Make an Offer</button>
                    </div>
                </div>

                <Fab 
                    variant="extended" 
                    className={classes.editButton} 
                    onClick={() => history.push(`/editproject/${project.id}`)}
                >
                    <EditIcon className={classes.editIcon}/>
                    Edit Project
                </Fab>

            </div>
        ) : (<LinearProgress />)}
    </>
  );
};

export default ProjectView;