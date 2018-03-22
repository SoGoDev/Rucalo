import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Auth from'./Components/Authentication/Authentication';
import Registration from './Components/Registration/Registration';
import Dashboard from './Components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path='/' component={Auth}/>
          <Route path='/registration' component={Registration}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default App;
