import React , {Component} from 'react';
import styleAuth from './Authentication.css';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state={
            login:props.login,
            password:props.password,
        }
        this.accessUser = this.accessUser.bind(this);
    }
    accessUser(){
        let state = this.state;
        if(
            (state.login !== undefined && state.login.replace(/ /g,'') !== '')
            && 
            (state.password !== undefined && state.password.replace(/ /g,'') !== '')
        ){
             let DB = JSON.parse(localStorage.getItem("DB"));
             if(DB !== null){
                DB.forEach(element => {
                    if(element.login === state.login && element.password === state.password){
                        this.setState({massege:'Welcome '+element.firstName,doneLogIn:true});
                        setTimeout(()=>{
                            this.setState({doneLogIn:false});
                            this.props.history.push('/dashboard');
                        },2000);
                    }else{
                        this.setState({massege:'No matches',doneLogIn:true});
                        setTimeout(()=>{
                            this.setState({doneLogIn:false});
                        },1000);
                    }
                });
             }else{
                this.setState({massege:'No matches',doneLogIn:true});
                        setTimeout(()=>{
                            this.setState({doneLogIn:false,login:'',password:''});

                        },1000);
             }
        }else{
            this.setState({showToast:true});
                        setTimeout(()=>{
                            this.setState({doneLogIn:false,login:'',password:''});
                        },3000);
        }
       
    }

    render(){
        return(
            <div className="form_container-Auth">
                <div className="form-Auth">
                    <div className="input_form_group-Auth">
                        <label>Login</label>
                        <input type="text" onChange={(e)=>{this.setState({login:e.target.value})}}value={this.state.login}/>
                    </div>
                    <div className="input_form_group-Auth">
                        <label>Password</label>
                        <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}} value={this.state.password}/>
                    </div>
                    <div className="controll_panel-Auth">
                        <div className="controll_bt-Auth" onClick={this.accessUser}>Log In</div>
                        <div className="controll_bt-Auth" onClick={()=>{this.props.history.push('/registration')}}>Sign Up</div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default Auth;