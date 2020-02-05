import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import PrivateRoute from './utils/PrivateRoute';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProjectView from "./components/ProjectView";



function App() {
  return (
    <div className="App">
      <CssBaseline>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
          <Route path={"/project"} component={ProjectView}/>
        </Switch>
      </Router>
      </CssBaseline>
    </div>
  );
}

export default App;
