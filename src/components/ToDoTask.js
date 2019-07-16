import React, { Component } from 'react'

class ToDoTask extends Component {


    render(){
        return(
            <ul className = "list"> 
                <li>
                    <input type="checkbox" />
                    {this.props.todo.task}

                    <div className ="btnGroup">
                        <button type="button"> Delete Task </button>
                        <button type = "button">Edit Task</button>
                    </div>
                    
                </li>
            </ul>
        )
    }
}

export default ToDoTask;