/**
 * Created by lixiaoxi on 15/12/15.
 * @description
 */
'use strict';

import React, { Component, View } from 'react-native';
import {bindActionCreators} from 'redux';
import * as todoActions from '../actions';
import { connect } from 'react-redux/native';

import Header from '../components/Header';
import MainSection from '../components/MainSection';

// @connect(state => ({
//   state: state.counter
// }))
class TodoApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos,  dispatch } = this.props;
        const actions = bindActionCreators(todoActions, dispatch);
        console.log(actions.addTodo);
        return (
            <View style={{flexDirection:'column'}}>
                <Header addTodo={actions.addTodo}/>
                <MainSection todos={todos} {...actions} />
            </View>
        );
    }
}

export default connect(state => ({
    todos: state.todos,
}))(TodoApp);
