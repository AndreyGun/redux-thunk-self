import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './store/reducers/reducer';
import App from './component/app';


const store = createStore(reducer, composeWithDevTools(applyMiddleware()));


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
 document.getElementById('root'));