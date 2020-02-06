import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  form: {
    width: '100%',
    margin: theme.spacing(3)
  },

  button: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const EditForm = ({ project, setProject, setIsEditing }) => {
  // TODO: option to go to dashboard or project view

  const classes = useStyles();

  let { id } = useParams();

  const [projectToEdit, setProjectToEdit] = useState(JSON.parse(JSON.stringify(project, (key, value) => {
    return value === null ? '' : value;
  })));

  const handleChange = evt => {
    evt.persist();

    setProjectToEdit({
      ...projectToEdit,
      [evt.target.name]: evt.target.value
    })
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    axiosWithAuth()
      .put(`/crud/${id}`, projectToEdit)
      .then(res => {
        console.dir(res);
        setProject(projectToEdit);
        setIsEditing(false);
      })
      .catch(err => {
        console.dir(err);
      });
  };

  return (
    <>
    {projectToEdit && (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Edit Project
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                label="Project name"
                name="name"
                variant="outlined"
                value={projectToEdit.name}
                onChange={handleChange}
                required
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Funding goal"
                name="funding_goal"
                variant="outlined"
                value={projectToEdit.funding_goal}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Description"
                name="description"
                variant="outlined"
                value={projectToEdit.description}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Location"
                name="location"
                variant="outlined"
                value={projectToEdit.location}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Image URL"
                name="image"
                variant="outlined"
                value={projectToEdit.image}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button 
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit Edit
          </Button>
        </form>
      </div>
    </Container>
  )}
  </>
  );
};

export default EditForm;