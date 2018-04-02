import React, {Component} from 'react'
import { css } from 'aphrodite/no-important'
import { connect } from 'react-redux';
import { closeToast } from '../../actions/index';
import styles from './ToastStyle'

const Toast = (props) =>{
    (function(){
        setTimeout(()=>{
            props.closeToast(false);
        },3000);
    }());
    return(
        <div className = {css(styles.toast)}>{props.massege}</div>
    )
}

export default connect (state=>({
        massege:state.toast.toastMessage
    }),
    {
        closeToast
    }
)(Toast);
