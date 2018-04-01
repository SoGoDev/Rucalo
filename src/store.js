import { createStore, combineReducers } from 'redux';

const myReducer = function(state={},action){
    return state
}

const reducer = combineReducers({
    myReducer : myReducer
})


export const store = createStore(reducer);