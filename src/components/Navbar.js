import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Navbar = () => {
  const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1
    }
  }));

  const classes = useStyles();  

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push('login');
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography onClick={() => history.push('/')} variant="h5" className={classes.title} align="left">
            VR Funding Platform
          </Typography>
          <Button color="inherit" onClick={() => history.push('/dashboard')}>My Projects</Button>{'   '}
          <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>{'   '}
          <Button color="inherit" onClick={() => history.push('/signup')}>Sign Up</Button>
          <Button color="inherit" onClick={() => logout()}>Sign Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);