import React , {PropTypes, Component} from 'react'
import  './Modal.css';


export default class Modal extends Comment{
    render(){
        const { message } = this.props
        return(
            <div>
                <div className = "popup_container">
                    <div className="popup">
                        <div>{massege}</div>
                    </div
                ></div>
            </div>
        )
    }
}

Modal.PropTypes = {
    message : PropTypes.string.isRequired
}