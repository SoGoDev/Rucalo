import React from 'react'
import { updateCard }from '../../actions/index'
import { connect } from 'react-redux';

import './Card.css'




function Card (props){
    let password = props.password;
    return(

        <div className="info_card-Dash" key={props.id}>
            <div className="user_info-Dash">
                <div>
                    <div>Description</div>
                    <div>{props.desciption}</div>
                </div>
                <div>
                    <div>Password</div>
                    <input type={props.passType} defaultValue={props.password} onChange={(e)=>{password = e.target.value}}/>
                </div>
            </div>
            <div className="controll_bt_card-Dash">    
                <div className="bt_info_card-Dash" onClick={()=>{this.props.updateCard(props.id,password)}}>Save</div>
                <div className="bt_info_card-Dash" >Delete</div>
            </div>
         </div>
    )
}

export default connect(state=>({}),
{updateCard}
)(Card);