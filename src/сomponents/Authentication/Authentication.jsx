import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import styleAuth from './Authentication.css';

class Auth extends Component{
    constructor(){
        this.state ={
            login:propTypes.string.login,
            password:propTypes.string.password
        }
    }
    accessUser(){
        let state = this.state
        if(
            (state.login !== undefined && state.login.replace(/ /g,'') !== '')
            && 
            (state.password !== undefined && state.password.replace(/ /g,'') !== '')
        ){
             let DB = JSON.parse(localStorage.getItem("DB"));
             if(DB !== null){
                DB.forEach(element => {
                    if(element.login === state.login && element.password === state.password){
                       
                    }else{
                        
                    }
                });
             }else{
                
             }
        }else{
            
        }
       
    }
    render(){
        return(
            <div className="form_container-Auth">
                <form className="form-Auth">
                    <div className="input_form_group-Auth">
                        <label>Login</label>
                        <input type="text" />
                    </div>
                    <div className="input_form_group-Auth">
                        <label>Password</label>
                        <input type="password"/>
                    </div>
                    <div className="controll_panel-Auth">
                        <div className="controll_bt-Auth" onClick={this.accessUser}>Log In</div>
                        <div className="controll_bt-Auth" onClick={()=>{this.props.history.push('/registration')}}>Sign Up</div>
                    </div>
                </form>
            </div>    
        )
    }
}

export default (null,{login})(Auth)
Auth.propTypes = {
    login: PropTypes.string.login,
    password: PropTypes.string.password
  }