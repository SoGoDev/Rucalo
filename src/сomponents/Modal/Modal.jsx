import React , { Component} from 'react'
// import PropTypes from 'prop-types';
import  './Modal.css';


 class Modal extends Component{
    render(){
        return(
            <div>
                <div className = "popup_container">
                    <div className="popup">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal;
