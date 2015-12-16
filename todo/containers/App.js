/**
 * Created by lixiaoxi on 15/12/15.
 * @description
 */
'use strict';

import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';

import reducer from '../reducers/todos';
import TodoApp from './TodoApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
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
