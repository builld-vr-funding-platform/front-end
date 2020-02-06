import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DeleteAlert from './DeleteAlert';

const useStyles = makeStyles(() => ({
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

const ProjectCard = ({ project }) => {
  const classes = useStyles();

  let history = useHistory();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography>
            {project.funding_goal}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => history.push(`/projects/${project.id}`)}>View</Button>
          <DeleteAlert projectName={project.name} projectId={project.id} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;