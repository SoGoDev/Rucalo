import React,{Component} from 'react';
import styleReg from './Registration.css';
import imgShowPass from './show_hide_password.svg';
class Registration extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:props.firstName,
            secondName:props.secondName,
            login:props.login,
            password:props.password,
            showPass:'password',
            showToast:false,
            doneSignUp:false
        }
        this.setFistName = this.setFistName.bind(this);
        this.setSecondName = this.setSecondName.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.showPass = this.showPass.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    setFistName(e){
        this.setState({firstName:e.target.value})
    }
    setSecondName(e){
        this.setState({secondName:e.target.value})
    }
    setLogin(e){
        this.setState({login:e.target.value})
    }
    setPassword(e){
        this.setState({password:e.target.value})
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
        let state = this.state;
        if(
            (state.firstName !== undefined && state.firstName.replace(/ /g,'') !=='' ) && 
            (state.secondName !== undefined && state.secondName.replace(/ /g,'') !=='' ) && 
            (state.login !== undefined && state.login.replace(/ /g,'') !=='' ) && 
            (state.password !== undefined && state.password.replace(/ /g,'') !=='' ) 
        ){
            if(!localStorage.DB){
                let user = {
                    firstName : state.firstName,
                    secondName :state.secondName,
                    login : state.login,
                    password: state.password
                }
                let users =[];
                users.push(user);
                localStorage.setItem('DB',JSON.stringify(users));
            }else{
                let user = {
                    firstName : state.firstName,
                    secondName :state.secondName,
                    login : state.login,
                    password: state.password
                }
                let DB =JSON.parse(localStorage.getItem("DB"));
                DB.push(user);
                localStorage.setItem("DB",JSON.stringify(DB));
                
            }
            this.setState({doneSignUp:true});
                setTimeout(()=>{
                    this.setState({doneSignUp:false});
                    this.props.history.push('./');
                },2000);
        }else{
            this.setState({showToast:true});
            setTimeout(()=>{
                this.setState({showToast:false});
            },3000);
        }
    }
    render(){
        let done = this.state.doneSignUp ? <div className = "done_popup_container"><div className="done_popup"><div>Done</div></div></div> : '';
        let toast = this.state.showToast ?<div className = "toast">Invalid data!</div>:'';
        return(
            <div className="container-Reg">
                <div className='container_form-Reg'>
                    <div>Hi! Welcome to Rucola </div>
                    <div className='user_form-Reg'>
                        <div className='input_group-Reg'>
                            <label>First Name</label>
                            <input type="text"onChange={this.setFistName} required/>
                        </div>
                        <div className='input_group-Reg'>
                            <label>Second Name</label>
                            <input type="text"onChange={this.setSecondName} required/>
                        </div>
                        <div className='input_group-Reg'>
                            <label>Login</label>
                            <input type="text"onChange={this.setLogin} required/>
                        </div>
                        <div className='input_group-Reg'>
                            <label>Password</label>
                            <div className="group_pass-Reg">
                                <input type={this.state.showPass}onChange={this.setPassword} required/>
                                <img src={imgShowPass} onClick={this.showPass}/>
                            </div>
                        </div>
                        <div className="bt-Reg" onClick={this.signUp}>Sign up</div>
                        <div className="bt-Reg" onClick={()=>{this.props.history.push('/')}}>Cancel</div>
                    </div>
                </div>
                <div>
                    {toast}
                </div>
                <div>
                    {done}
                </div>
            </div>
        )
    }
}

export default Registration;