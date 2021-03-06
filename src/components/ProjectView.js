import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import axiosWithAuth from '../utils/axiosWithAuth';

import EditForm from './EditForm';

const useStyles = makeStyles(theme => ({
    editButton: {
        maxWidth: '200px',
        margin: '16px auto'
    },

    editIcon: {
        marginRight: theme.spacing(1)
    }
}));

const ProjectView = () => {
    const classes = useStyles();
    
    let { id } = useParams();
    
    const [project, setProject] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

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
        {project && !isEditing && (
            <div className={'projectView'}>
                <div className={'titleHead'}>
                    <h1>{project.name}</h1>
                    <h3>{project.location}</h3>
                    <img src={'https://images.unsplash.com/photo-1496589180022-bd1c15f3ea6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80'}
                         width={'100%'} height={'auto'} alt={project.name} />
                    <h2>${project.funding_goal}</h2>
                    <h3>Funding received: {project.amount ? project.amount : '$0'}</h3>
                    <p>{project.description}</p>
                    <h3>{project.email}</h3>
                    <div className={'buttons'}>
                        <button>Invest</button>
                        <button>Make an Offer</button>
                    </div>
                </div>
                <Fab 
                    variant="extended" 
                    className={classes.editButton} 
                    onClick={() => setIsEditing(true)}
                >
                    <EditIcon className={classes.editIcon}/>
                    Edit Project
                </Fab>

            </div>
        )}
        {!project && (<LinearProgress />)}
        {isEditing && (<EditForm project={project} setProject={setProject} setIsEditing={setIsEditing} />)}
    </>
  );
};

export default ProjectView;