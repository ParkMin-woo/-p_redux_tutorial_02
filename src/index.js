import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux 실습
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {updateUser} from "./redux/action";
import {store} from "./redux/store";

console.log("store.getState1 : " , store.getState());



store.subscribe(() => console.log("store.getState3 : " , store.getState()));

// store.dispatch(updateUser);

console.log("store.getState2 : " , store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
