import { combineReducers } from 'redux'
const initialState = {
    card : [],
    isVisible :false
}

 const rootReducer = combineReducers({
    cards,
    modal

})

function cards (state = initialState,action){
    switch (action.type){
        case 'ADD_CARD': 
            return Object.assign({},state,state.card.push(action.info));
        default:
            return state
    }
}

function modal (state = initialState ,action){
    switch (action.type){
        case 'IS_VISIBLE':
            return Object.assign({},state,{isVisible:action.status});
        default:
            return state
    }
}



export default rootReducer;