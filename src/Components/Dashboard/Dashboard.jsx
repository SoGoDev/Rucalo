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
    }
    getInfo(){
        this.setState({data:JSON.parse(localStorage.getItem("DB"))});
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
                        <div className="bt_info_card-Dash">Edit</div>
                        <div className="bt_info_card-Dash">Delete</div>
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