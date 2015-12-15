/**
 * Created by lixiaoxi on 15/12/15.
 * @description
 */
'use strict';
import * as types from './actionTypes';

export function addTodo(text) {
    return {
        type: types.ADD_TODO,
        text
    };
}

export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        id
    }
}

export function editTodo(id, text) {
    return {type: types.EDIT_TODO, text, id};
}

export function completeTodo(id) {
    return {type: types.COMPLETE_TODO, id};
}

export function completeAll() {
    return {type: types.COMPLETE_ALL};
}

export function clearComplete() {
    return {type: types.CLEAR_COMPLETED};
}