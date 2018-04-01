import { combineReducers } from 'redux'
const initialState = {
    card : [],
    isVisible :false
}

 const rootReducer = combineReducers({
    cards,
    modal

})

function cards (state = [],action){
    switch (action.type){
        case 'ADD_CARD': 
            state.card.push(action.text);
            return state ;
        default:
            return state
    }
}

function modal (state = initialState ,action){
    console.log(state);
    switch (action.type){
        case 'IS_VISIBLE':
            console.log(action.status)
            return Object.assign({},state,{isVisible:action.status});
        default:
            return state
    }
}



export default rootReducer;