import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

import AddForm from './AddForm';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3)
  }
}));

const AddProject = () => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          New Project
        </Typography>
        <AddForm />
      </Paper>
    </div>
  );
}

export default AddProject;