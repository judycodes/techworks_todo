import React, { Component } from 'react'

    const ToDoTask = (props) => {
        
        

        const todo = props.todo
        console.log('todo in ToDoTask: ', todo.task) 
        return(
                 
                    <li>
                        <input type="checkbox" /> 
                        {/* above creates a checkbox for completing and uncompleted tasks */}
                        
                        {todo.task} 

    
                        <div className ="btnGroup">
                            <button type="button" onClick={props.delete} id={props.id}> Delete Task </button>
                            <button type = "button" onClick={props.edit} id={props.id}>Edit Task</button> 
                        </div>
                        
                    </li>
            
            )
        
    }
    


export default ToDoTask;