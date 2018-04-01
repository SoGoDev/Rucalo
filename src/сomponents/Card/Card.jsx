import React from 'react'
import './Card.css'




function Card (props){
    console.log(props);
    return(

        <div className="info_card-Dash" key={props.index}>
            <div className="user_info-Dash">
                <div>
                    <div>WebSite</div>
                    <div>{props.desciption}</div>
                </div>
                <div>
                    <div>Password</div>
                    <input type={props.passType} defaultValue={props.password}/>
                </div>
            </div>
            <div className="controll_bt_card-Dash">    
                <div className="bt_info_card-Dash" >Edit</div>
                <div className="bt_info_card-Dash" >Delete</div>
            </div>
         </div>
    )
}

export default Card;