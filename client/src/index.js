import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from './reducers'
import thunk from 'redux-thunk'

const store = createStore(todoApp);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,  document.getElementById('root')
);

