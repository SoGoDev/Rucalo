import React ,{Component} from 'react';
import styleDashboard from './Dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            showModal:false
        }
        this.getInfo = this.getInfo.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }
    updateData(login){
        
    }
    deleteData(login){
        let data = this.state.data;
        data.forEach((index,i) =>{
            if(index.login === login){
                data.splice(i,1);
                console.log(data);
            }
        });
        localStorage.setItem('DB',JSON.stringify(data));
        this.setState({data:data});
    }
    getInfo(){
        
        this.setState(
            {
                data:localStorage.getItem("DB") !== null ? JSON.parse(localStorage.getItem("DB")) :[]
            }
        );
    }
    componentWillMount(){
        this.getInfo();
    }
    render(){
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
                        <div className="bt_info_card-Dash" onClick={()=>{ this.updateData(index.login)}}>Edit</div>
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
            </div>
        )
    }
}
export default Dashboard;