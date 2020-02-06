import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';

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

const EditForm = () => {
  const classes = useStyles();

  const [projectInfo, setProjectInfo] = useState({
    name: '',
    funding_goal: '',
    description: '',
    location: '',
    image: ''
  });

  const handleChange = evt => {
    evt.persist();

    setProjectInfo({
      ...projectInfo,
      [evt.target.name]: evt.target.value
    })
  };

  const handleSubmit = evt => {

  };

  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Edit Project
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                label="Project name"
                name="name"
                variant="outlined"
                value={projectInfo.name}
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
                value={projectInfo.goal}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Description"
                name="description"
                variant="outlined"
                value={projectInfo.description}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Location"
                name="location"
                variant="outlined"
                value={projectInfo.location}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Image URL"
                name="image"
                variant="outlined"
                value={projectInfo.image}
                onChange={handleChange}
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
        Submit Edit
      </Button>
        </form>
      </div>
    </Container>
  );
};

export default EditForm;