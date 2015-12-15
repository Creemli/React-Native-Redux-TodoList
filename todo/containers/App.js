/**
 * Created by lixiaoxi on 15/12/15.
 * @description
 */
'use strict';

import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';

import * as reducers from '../reducers/index';
import TodoApp from './TodoApp';

console.log(reducers);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => <TodoApp />}
            </Provider>
        );
    }
}
