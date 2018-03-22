import React ,{Component} from 'react';
import styleDashboard from './Dashboard.css';
import imgShowPass from '../Registration/show_hide_password.svg';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            showModal:false,
            firstName:props.firstName,
            secondName:props.secondName,
            login:props.login,
            loginKey:props.loginKey,
            password:props.password,
            showPass:'password'
            
        }
        this.getInfo = this.getInfo.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.showPass = this.showPass.bind(this);
        this.setFistName = this.setFistName.bind(this);
        this.setSecondName = this.setSecondName.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.save = this.save.bind(this);
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
    save(){
        let data = this.state.data;
        data.forEach((index,i) =>{
            if(index.login === this.state.loginKey){
                data.splice(i,1);
                console.log(data);
            }
        });
        data.push({
            firstName:this.state.firstName,
            secondName:this.state.secondName,
            login:this.state.login,
            password:this.state.password
        });
        localStorage.setItem('DB',JSON.stringify(data));
        this.setState({data:data,showModal:false});
    }
    updateData(firstName,secondName,login,password){
        this.setState({
            showModal:true,
            firstName:firstName,
            secondName:secondName,
            login:login,
            loginKey:login,
            password:password
        });
    }
    deleteData(login){
        let data = this.state.data;
        data.forEach((index,i) =>{
            if(index.login === login){
                data.splice(i,1);
            }
        });
        localStorage.setItem('DB',JSON.stringify(data));
        this.setState({
            data:data,
            showModal:false
        });
    }
    getInfo(){
        
        this.setState(
            {
                data:localStorage.getItem("DB") !== null ? JSON.parse(localStorage.getItem("DB")) :[]
            }
        );
    }
    showPass(){
        let state =this.state;
        if(state.showPass == 'password'){
            this.setState({showPass:'text'});
        }else{
            this.setState({showPass:'password'});
        }
    }
    componentWillMount(){
        this.getInfo();
    }
    render(){
    let modal = this.state.showModal ? (
        <div className = "done_popup_container">
            <div className="update_popup-Dash">
            <div className='user_form-Reg'>
                 <div className='input_group-Reg'>
                    <label>First Name</label>
                    <input type="text"onChange={this.setFistName} value={this.state.firstName}/>
                </div>
                <div className='input_group-Reg'>
                    <label>Second Name</label>
                    <input type="text"onChange={this.setSecondName} value={this.state.secondName}/>
                </div>
                <div className='input_group-Reg'>
                    <label>Login</label>
                    <input type="text"onChange={this.setLogin} value={this.state.login}/>
                </div>
                <div className='input_group-Reg'>
                    <label>Password</label>
                    <div className="group_pass-Reg">
                        <input type={this.state.showPass}onChange={this.setPassword} value={this.state.password}/>
                        <img src={imgShowPass} onClick={this.showPass}/>
                    </div>
                </div>
            </div>            
            <div className='popup_cr_bt-Dash'>
                <div className="bt_info_card-Dash" onClick={this.save}>Save</div>
                <div className="bt_info_card-Dash" onClick={()=>{this.setState({showModal:false})}}>Cancel</div>
            </div>
            </div>
        </div> ): '';
        
        let data = this.state.data.length !== 0 ? this.state.data.map(index=>{
            return(
                <div className="info_card-Dash">
                    <div className="user_info-Dash">
                        <div>
                            <div>Login</div>
                            <div>{index.login}</div>
                        </div>
                        <div>
                            <div>User</div>
                            <div>{index.firstName+" "+index.secondName}</div>
                        </div>
                    </div>
                    <div className="controll_bt_card-Dash">    
                        <div className="bt_info_card-Dash" onClick={()=>{ this.updateData(index.firstName,index.secondName,index.login,index.password)}}>Edit</div>
                        <div className="bt_info_card-Dash" onClick={()=>{ this.deleteData(index.login)}}>Delete</div>
                    </div>
                </div>
            )
        }):'';
        
        
        
        return(
            <div>
                <div className="dashboard_container-Dash">
                    {data}
                </div>
                {modal}
            </div>
        )
    }
}
export default Dashboard;