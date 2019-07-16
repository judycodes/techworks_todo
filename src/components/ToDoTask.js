import React, { Component } from 'react'

    const ToDoTask = (props) => {
        
        const todo = props.todo
        return(
                 
                    <li>
                        <input type="checkbox" />
                        {todo.task}
    
                        <div className ="btnGroup">
                            <button type="button"> Delete Task </button>
                            <button type = "button">Edit Task</button>
                        </div>
                        
                    </li>
            
            )
        
    }
    


export default ToDoTask;