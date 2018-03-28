import { SET_MESSAGE } from '../constants/Modal';

export function setMessage(message){
    return {
        type : SET_MESSAGE ,
        payload : message
    }
}