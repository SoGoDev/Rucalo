
export const addCard = info => ({
    type: 'ADD_CARD',
    info
});
export const updateCard = (id , password) =>({
    type: 'UPDATE_DATA',
    id,password
});
export const isVisible = (status)=>({
    type: 'IS_VISIBLE',
    status
})