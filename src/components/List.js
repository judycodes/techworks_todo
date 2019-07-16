import React, { Component } from 'react';
import ToDoTask from './ToDoTask';

class ToDoList extends Component {
    render(){
        return this.props.todos.map((todo) => (
            <ToDoTask key={todo.id} todo = {todo}/>         
        ));
    }
}


export default ToDoList;
