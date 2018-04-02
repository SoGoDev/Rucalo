import React,{Component} from 'react';
import { connect } from 'react-redux';
import { checkInput } from '../../service/index';
import { setMessage ,openToast } from '../../actions/index';
import Toast from '../Toast/Toast';

import './Registration.css';
import imgShowPass from './show_hide_password.svg';





class Registration extends Component {
    constructor(props){
        super(props);
        this.state={
            login:props.login,
            password:props.password,
            showPass:'password',
        }
        this.showPass = this.showPass.bind(this);
        this.signUp = this.signUp.bind(this);
        this.showToast =this.showToast.bind(this);
        
    }
    showToast(){
        if(this.props.status){
            return <Toast/>
        }else{
            return null
        }
    }
    showPass(){
        let state =this.state;
        if(state.showPass == 'password'){
            this.setState({showPass:'text'});
        }else{
            this.setState({showPass:'password'});
        }
    }
    signUp(){
        let str ={
            description : this.state.login,
            password : this.state.password
        }
        checkInput(str)
        .then(data=>{
            if(localStorage.user){
                let users = JSON.parse(localStorage.user);
                users.push({
                        
                    login:this.state.login,
                    password : this.state.password
                });
                localStorage.setItem('user',JSON.stringify(users));
            }else{
                console.log('no');
                localStorage.setItem('user',JSON.stringify(
                    [
                        {
                        
                            login:this.state.login,
                            password : this.state.password
                        }
                    ]
                ))
            }
            this.props.history.push('/');      
        })
        .catch(err=>{
            this.props.setMessage("Invalid data");
            this.props.openToast(true);
        });
    }
    render(){
        return(
            <div className="container-Reg">
                <div className='container_form-Reg'>
                    <div>Hi! Welcome to Rucola </div>
                    <div className='user_form-Reg'>
                        <div className='input_group-Reg'>
                            <label>Login</label>
                            <input type="text"onChange={(e)=>{this.setState({login:e.target.value})}} required/>
                        </div>
                        <div className='input_group-Reg'>
                            <label>Password</label>
                            <div className="group_pass-Reg">
                                <input type={this.state.showPass}onChange={(e)=>{this.setState({password:e.target.value})}} required/>
                                <img src={imgShowPass} onClick={this.showPass}/>
                            </div>
                        </div>
                        <div className="bt-Reg" onClick={this.signUp}>Sign up</div>
                        <div className="bt-Reg" onClick={()=>{this.props.history.push('/')}}>Cancel</div>
                    </div>
                </div>
                {this.showToast()}
            </div>
        )
    }
}

export default connect(state=>({
        status : state.toast.isToast,
        message: state.toast.setMessage
    }),
    {
        setMessage,
        openToast
    }
)(Registration);