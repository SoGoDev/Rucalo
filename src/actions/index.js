
export const addCard = text => ({
    type: 'ADD_CARD',
    text
});
export const isVisible = (status)=>({
    type: 'IS_VISIBLE',
    status
})