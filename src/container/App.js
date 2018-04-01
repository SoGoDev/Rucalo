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
// import MainLayout from '../сomponents/MainLayout/MainLayout';
// import Auth from'../сomponents/Authentication/Authentication';
// import Registration from '../components/Registration/Registration';
import Dashboard from '../сomponents/Dashboard/Dashboard';




class App extends Component{
  
  render(){
    
    return (
        <div>
          <Header/>
          {/* <Auth/> */}
          <Dashboard />
        </div>
    )
  }  
}



export default connect(

)(App)
