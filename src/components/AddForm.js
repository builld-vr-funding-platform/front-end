import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  }
}))

const AddForm = () => {
  const classes = useStyles();
  let history = useHistory();

  const [projectInfo, setProjectInfo] = useState({
    name: '',
    funding_goal: '',
    description: '',
    location: ''
  });

  const handleChange = evt => {
    evt.persist();

    setProjectInfo({
      ...projectInfo,
      [evt.target.name]: evt.target.value
    })
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    axiosWithAuth()
      .post('/crud', projectInfo)
      .then(res => {
        console.dir(res);
        history.push('/dashboard');
      })
      .catch(err => {
        console.dir(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField 
            label="Project name"
            name="name"
            value={projectInfo.name}
            onChange={handleChange}
            required
            fullWidth
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Funding goal"
            name="funding_goal"
            value={projectInfo.goal}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Description"
            name="description"
            value={projectInfo.description}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Location"
            name="location"
            value={projectInfo.location}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
      </Grid>
      <Button 
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={classes.button}
      >
        Submit Project
      </Button>
    </form>
  );
};

export default AddForm;