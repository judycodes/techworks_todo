import React from 'react'

    const ToDoTask = (props) => {
        const todo = props.todo
        // console.log('todo in ToDoTask: ', todo.task) 
        // console.log('todo object in Todo: ', todo.)    


        let output;
        if(props.todo.edit) {
            output = (
                <div>
                    <form>
                        <input className = "editInput" type="text" defaultValue ={props.todo.task}/>
                        <button type="button">Save</button>
                    </form>
                </div>
            )
        } else {
           output = (
            <li>
                <input type="checkbox" /> 
                {/* above creates a checkbox for styling completing and uncompleted tasks */}
                        
                {todo.task} 

    
                <div className ="btnGroup">
                    <button type="button" onClick={props.delete} id={props.id}> Delete Task </button>
                    <button type = "button" onClick={props.edit} id={props.id}>Edit Task</button> 
                </div>
                        
            </li>
           )
           
        }
        

        
        return output;
        
    }
    


export default ToDoTask;