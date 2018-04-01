import React from 'react'




function Card ({site , password , index}){
    return(

        <div className="info_card-Dash" key={index}>
            <div className="user_info-Dash">
                <div>
                    <div>WebSite</div>
                    <div>{site}</div>
                </div>
                <div>
                    <div>Password</div>
                    <input type={} defaultValue={password}/>
                </div>
            </div>
            <div className="controll_bt_card-Dash">    
                <div className="bt_info_card-Dash" onClick={}>Edit</div>
                <div className="bt_info_card-Dash" onClick={}>Delete</div>
            </div>
         </div>
    )
}