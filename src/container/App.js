import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { rootReducer} from '../actions/index';
import Header from '../сomponents/Header/Header';
import Auth from'../сomponents/Authentication/Authentication';
import Registration from '../сomponents/Registration/Registration';
import Dashboard from '../сomponents/Dashboard/Dashboard';




class App extends Component{
  
  render(){
    
    return (
        <Router>
          <div>
            <Header/>
            <Route exact path='/' component={Auth}/>
            <Route exact path='/reg' component={Registration}/>
            <Route exact path='/dash' component={Dashboard}/>
          </div>
        </Router>
    )
  }  
}



export default connect(

)(App)
