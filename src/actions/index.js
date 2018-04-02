
export const addCard = info => ({
    type: 'ADD_CARD',
    info
});
export const updateCard = (id , password) =>({
    type: 'UPDATE_CARD',
    id,password
});
export const deleteCard = id => ({
    type : 'DELETE_CARD',
    id
});
export const isVisible = (status)=>({
    type: 'IS_VISIBLE',
    status
});
export const initState = (db)=>({
    type: 'INIT_STATE',
    db
});
export const setMessage = message =>({
    type: 'SET_MESSAGE',
    message
});

export const openToast = status =>({
    type:'OPEN_TOAST',
    status
});
export const closeToast = status =>({
    type:'CLOSE_TOAST',
    status
});
export const setUser = user =>({
    type:'SET_USER',
    user
});
