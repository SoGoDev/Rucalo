import React ,{Component} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import   './Dashboard.css';
import Modal from '../Modal/Modal';
import { isVisible , addCard} from '../../actions/index'
import { checkInput } from '../../service/index'

class Dashboard extends Component {
    constructor(){
        super();
     this.isValid = this.isValid.bind(this);  
    }
    isValid(str){
        checkInput(str).then(data=>{

        }).catch(err=>{
            console.log(err);
        })
    }
    showModal(){
        let str = {
            description : '',
            password : ''
        }
        console.log(str);
        if(this.props.status){
            return(
                <Modal>
                    <form className="form-Auth">
                        <div className="input_form_group">
                            <label>Description</label>
                            <input 
                                type="text" 
                                onChange={
                                    (e)=>{ str.description = e.target.value }
                                }
                            />
                        </div>
                        <div className="input_form_group-Auth">
                            <label>Password</label>
                            <input 
                                type="password"
                                onChange={
                                    (e)=>{ str.password = e.target.value }
                                }
                            />
                        </div>
                        <div className="controll_panel-Auth">
                            <div className="controll_bt-Auth" onClick={()=>{this.isValid(str)}}>Add</div>
                            <div className="controll_bt-Auth" onClick={()=>{this.props.isVisible(false)}}>Cancel</div>
                        </div>
                    </form>
                </Modal>
            )
        }else{
            return null
        }
    }
    render(){
        return(
            <div>
                <div className="dashboard_container-Dash">
                    <div className="bt_add-Dash" onClick={()=>{this.props.isVisible(true)}}>+</div>
                </div>
                {this.showModal()}
            </div>
        )
    }
}

  
export default connect(state =>({
    status: state.modal.isVisible
}),
{
    isVisible
}
    
)(Dashboard);

// 7847509