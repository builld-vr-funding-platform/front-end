import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <CssBaseline>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      </CssBaseline>
    </div>
  );
}

export default App;
