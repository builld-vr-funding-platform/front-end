import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import PrivateRoute from './utils/PrivateRoute';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddProject from './components/AddProject';

function App() {
  return (
    <div className="App">
      <CssBaseline>
      <Router>
        <Navbar />
        <Container maxWidth="md">
        <Switch>
          <PrivateRoute path="/addproject" component={AddProject} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
        </Container>
      </Router>
      </CssBaseline>
    </div>
  );
}

export default App;
