import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom' ;
import { createStore ,applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './container/App';
import styleResert from './resert.css';
import styleIndex from './index.css';
import reducer from './reducer/index'


const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));

