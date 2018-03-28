import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './Components/Header/Header';
import MainLayout from './Components/MainLayout/MainLayout';
import Auth from'./Components/Authentication/Authentication';
import Registration from './Components/Registration/Registration';
import Dashboard from './Components/Dashboard/Dashboard';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route path='/' component={MainLayout}/>
        </div>
      </Router>
    );
  }
}

function mapStateToProps (state) {
  return {
    
  }
}
export default connect(mapStateToProps)(App)
