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
        return (
            <View style={{flexDirection:'column'}}>
                <Header {...bindActionCreators(todoActions, dispatch)}/>
                <MainSection todos={todos}  {...bindActionCreators(todoActions, dispatch)} />
            </View>
        );
    }
}

export default connect(state => ({
    todos: state.todos,
}))(TodoApp);
