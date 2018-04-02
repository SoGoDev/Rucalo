import { combineReducers } from 'redux'
const initialState = {
    card : [],
    isVisible :false,
    toastMessage : '',
    isToast :false,
    user:''
}

 const rootReducer = combineReducers({
    cards,
    modal,
    toast,
    user

})

function cards (state = initialState,action){
    switch (action.type){
        case 'ADD_CARD': 
            return Object.assign({},state,state.card.push(action.info));
        case 'UPDATE_CARD':
            return Object.assign({},state,state.card.forEach(index=>{
                if(action.id === index.id){
                    index.password = action.password; 
                }
            }))
        case 'DELETE_CARD':
            return Object.assign({},state,state.card = state.card.filter(({ id })=> {id !== action.id}))
        case 'INIT_STATE':
            return Object.assign({},state,state.card = action.db);
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

function toast (state = initialState , action ){
    switch (action.type){
        case 'SET_MESSAGE':
            return Object.assign({},state,state.toastMessage = action.message);
        case 'OPEN_TOAST':
            return Object.assign({},state,state.isToast = action.status);
        case 'CLOSE_TOAST':
            return Object.assign({},state,state.isToast = action.status);
        default: 
            return state
    }
}
function user (state = initialState ,action){
    switch (action.type){
        case 'SET_USER':
            return Object.assign({},state,state.user = action.user);
        default:
            return state
    }
}
export default rootReducer;