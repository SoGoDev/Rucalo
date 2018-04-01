
export const addCard = info => ({
    type: 'ADD_CARD',
    info
});
export const isVisible = (status)=>({
    type: 'IS_VISIBLE',
    status
})