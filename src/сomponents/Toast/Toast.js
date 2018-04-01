import React, {Component} from 'react'
import { css } from 'aphrodite/no-important'

import styles from './ToastStyle'

const Toast = ({massege}) =>{
    return(
        <div className = {css(styles.toast)}>{massege}</div>
    )
}
