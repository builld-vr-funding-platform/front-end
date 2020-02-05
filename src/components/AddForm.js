import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';

const AddForm = () => {
  const [projectInfo, setProjectInfo] = useState({
    name: '',
    goal: '',
    description: '',
    location: ''
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField 
          label="Project name"
          name="name"
          required
          autoFocus
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField 
          label="Funding goal"
          name="name"
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField 
          label="Description"
          name="description"
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField 
          label="Location"
          name="location"
          required
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default AddForm;