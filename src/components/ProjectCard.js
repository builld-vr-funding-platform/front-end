import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const ProjectCard = ({ project }) => {
  const useStyles = makeStyles(theme => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    cardContent: {
      flexGrow: 1
    },

    cardActions: {
      justifyContent: 'space-around'
    }
  }));

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography>
            {project.type}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">Edit</Button>
          <Button size="small" color="secondary">Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;