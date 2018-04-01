import React ,{Component} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import  './Dashboard.css';

import Modal from '../Modal/Modal';
import Card from '../Card/Card';

import { isVisible , addCard} from '../../actions/index'
import { checkInput } from '../../service/index'

class Dashboard extends Component {
    constructor(){
        super();
     this.isValid = this.isValid.bind(this);
    }
    isValid(str){
        checkInput(str)
        .then(data=>{
            this.props.addCard(data);
            this.props.isVisible(false);
        })
        .catch(err=>{
            // console.log(err);
        })
    }
    
    showModal(){
        let str = {
            description : '',
            password : ''
        }
        if(this.props.status){
            return(
                <Modal>
                    <form className="">
                        <div className="">
                            <label>Description</label>
                            <input 
                                type="text" 
                                onChange={
                                    (e)=>{ str.description = e.target.value }
                                }
                            />
                        </div>
                        <div className="">
                            <label>Password</label>
                            <input 
                                type="password"
                                onChange={
                                    (e)=>{ str.password = e.target.value }
                                }
                            />
                        </div>
                        <div className="bt_container_controll-Dash">
                            <div className="bt_control-Dash" onClick={()=>{this.isValid(str)}}>Add</div>
                            <div className="bt_control-Dash" onClick={()=>{this.props.isVisible(false)}}>Cancel</div>
                        </div>
                    </form>
                </Modal>
            )
        }else{
            return null
        }
    }
    render(){
        console.log(this.props.card);
        return(
            <div>
                <div className="dashboard_container-Dash">
                    {this.props.card.map(index=>{
                        return <Card key={index} desciption={index.description} password={index.password}/>
                    })}
                    <div className="bt_add-Dash" onClick={()=>{this.props.isVisible(true)}}>+</div>
                </div>
                {this.showModal()}
            </div>
        )
    }
}

  
export default connect(state =>({
    status: state.modal.isVisible,
    card: state.cards.card
}),
{
    isVisible,
    addCard
}
    
)(Dashboard);

// 7847509