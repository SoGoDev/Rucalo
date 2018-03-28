import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom' ;
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import styleResert from './resert.css';
import styleIndex from './index.css';
import configureStore from './store/configureStore'

const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));

