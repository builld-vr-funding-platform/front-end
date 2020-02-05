import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';

import AddForm from './AddForm';

const useStyles = makeStyles(theme => ({
  layout: {

  },

  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  },

  button: {
    marginTop: theme.spacing(3)
  }
}))

const AddProject = () => {
  const handleAdd = () => {

  };

  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          New Project
        </Typography>
        <AddForm />
        <Button 
          variant="contained"
          color="primary"
          onClick={handleAdd}
          className={classes.button}
        >
          Submit Project
        </Button>
      </Paper>
    </div>
  );
}

export default AddProject;