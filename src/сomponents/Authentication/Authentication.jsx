import React,{ Component } from 'react'
import { connect } from 'react-redux';
import { checkInput , findInLocal } from '../../service';
import { initState ,setMessage ,openToast,setUser} from '../../actions/index';
import Toast from '../Toast/Toast';
import './Authentication.css';

class Auth extends Component{
    constructor(){
        super();
        this.state={
            login:'',
            password:''
        }
        this.accessUser = this.accessUser.bind(this);
        this.showToast =this.showToast.bind(this);
    }
    accessUser(){
        let str ={
            description : this.state.login,
            password : this.state.password
        }
        checkInput(str).then(data=>{
            findInLocal(data.description).then(data=>{
                this.props.initState(JSON.parse(data).cards);
                this.props.setUser(str.description);
                this.props.history.push('/dash');
            }).catch(err=>{
                this.props.setMessage("Incorrect data");
                this.props.openToast(true);
            })
        }).catch(err=>{
            this.props.setMessage("Invalid data");
            this.props.openToast(true);
        });
    }
    showToast(){
        if(this.props.status){
            return <Toast/>
        }else{
            return null
        }
    }
    render(){
        return(
            <div className="form_container-Auth">
                <form className="form-Auth">
                    <div className="input_form_group-Auth">
                        <label>Login</label>
                        <input type="text" onChange={(e)=>{this.setState({login:e.target.value})}}/>
                    </div>
                    <div className="input_form_group-Auth">
                        <label>Password</label>
                        <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    </div>
                    <div className="controll_panel-Auth">
                        <div className="controll_bt-Auth" onClick={this.accessUser}>Log In</div>
                        <div className="controll_bt-Auth" onClick={()=>{this.props.history.push('/registration')}}>Sign Up</div>
                    </div>
                </form>
                {this.showToast()}
            </div>    
        )
    }
}

export default connect(state=>({
    status : state.toast.isToast,
    message: state.toast.setMessage,
}),
    {
        initState,
        setMessage,
        openToast,
        setUser
    })(Auth)

