/**
 * Created by lixiaoxi on 15/12/15.
 * @description
 */
'use strict';

import React, {Component, View, TouchableHighlight, TextInput, Text} from 'react-native';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todos} = this.props;
        return (
            <View>
                {todos.map(todo=>
                    <View key={todo.id} todo={todo}>
                        <Text>{todo.text}</Text>
                    </View>
                )}
                <Text>Main</Text></View>
        );
    }
}

module.exports = List;

