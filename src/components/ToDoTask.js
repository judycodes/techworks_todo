import React, {Component} from 'react';

class ToDoTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            editingMode : false
        }
    
    }

    editingModeInput = () => { //toggles whether the edit input form displays
        this.setState({ 
            editingMode : !this.state.editingMode
        })
    }

    render(){

        const todo = this.props.todo
        //console.log('name of each task from todos in List.js passed to ToDoTask.js: ', todo.taskName) 
        // console.log('todo variable storing objects from todos in List.js passed to ToDoTask.js: ', todo.)  

        let output; 

        if(this.state.editingMode) { //if the editingMode property is true, then the edit form will appear and allow user to edit the input of the task already stored in todos array
            output = (
                <div>
                    <form onSubmit = {this.handleUpdate}>
                        <input 
                            className = "editInput" 
                            type = "text" 
                            defaultValue ={this.props.todo.taskName}
                            onChange = {this.handleEditChange}/>
                        <button type="button">Save</button>
                        <button type="button">Exit</button>
                    </form>
                </div>
            )
        } else {
                //if the edited property remains false, then the task will just display as usual
           output = (
            <li>
                <input type="checkbox" /> 
                {/* above creates a checkbox for styling completing and uncompleted tasks */}
                        
                {todo.taskName} 
                {/* display the taskName text value */}
    
                <div className ="btnGroup">
                    <button 
                        type="button" 
                        onClick={this.props.delete} 
                        id={this.props.id}>Delete Task</button>
                    <button 
                        type = "button" 
                        onClick={this.editingModeInput} 
                        id={this.props.id}>Edit Task</button> 
                </div>
                {/* provides each task with a set of delete and edit button to trigger events */}

            </li>
           )
           
        }
        

        
        return output; 
    }
}    


export default ToDoTask;