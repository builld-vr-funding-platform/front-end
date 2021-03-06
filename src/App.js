import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import PrivateRoute from './utils/PrivateRoute';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddProject from './components/AddProject';
import ProjectView from "./components/ProjectView";
import EditForm from './components/EditForm';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif"
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
        <Router>
          <Navbar />
          <Container maxWidth="md">
            <Switch>
              <PrivateRoute path="/editproject/:id" component={EditForm} />
              <PrivateRoute path="/projects/:id" component={ProjectView} />
              <PrivateRoute path="/addproject" component={AddProject} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/" component={Home} />
              <Route path={"/project"} component={ProjectView}/>
            </Switch>
          </Container>
        </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;