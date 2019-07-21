import React, {Component} from 'react';

class ToDoTask extends Component {
    constructor(props){
        super(props);

//=======[STATE IN TODOTASK COMPONENT]============          
        this.state = {
            editingMode : false, 
            taskName : this.props.taskName 
        }
    }

//=======[EVENTS]============    
    editingModeInput = () => { //toggles whether the edit input form displays
        this.setState({ 
            editingMode : !this.state.editingMode
        })
    }

    handleUpdate = (event) => {
        event.preventDefault();
        this.props.edit(this.props.id, this.state.taskName);
        this.setState({
            editingMode : false
        })
    }

    handleEditChange = (event) => { //captures the changed task data
        this.setState({
            taskName : event.target.value
        })
    }  

    
//=======[RENDER]============      
    render(){
       
        const todo = this.props.todo
        //console.log('name of each task from todos in List.js passed to ToDoTask.js: ', todo.taskName) 
        // console.log('todo variable storing objects from todos in List.js passed to ToDoTask.js: ', todo.)  
        //console.log(todo.completed, 'value of todo.completed currently')
        let output; //what is displayed depending on this.state.editingMode condition

        if(this.state.editingMode) { //if the editingMode property is true, then the edit form will appear and allow user to edit the input of the task already stored in todos array
            output = (
                <div>
                    <form onSubmit = {this.handleUpdate}>
                        <input 
                            className = "editInput" 
                            type = "text" 
                            defaultValue ={todo.taskName}
                            name = "taskName"
                            onChange = {this.handleEditChange}/>
                        <button type="submit">Save</button>
                    </form>
                </div>
            )
        } else {//if the edited property remains false, then the task will just display as usual
           
            output = ( //todo.completedStyling same as todo.completed?
                <li className = {todo.completed ? 'completedStyle' : ''}> 
                {/* only if this.props.completed is true, then a css style will be applied. */}

                    <input type="checkbox" onChange={this.props.completedStyling.bind(this, this.props.id)} /> 
                    {/* above creates a checkbox for styling completing and uncompleted tasks 
                    .bind is needed so "this" keyword is not undefined
                    this.props.id is passed so React knows which task is being changed*/}
                        
                    {todo.taskName} 
                    {/* display the taskName text value */}
    
                    <div className ="btnGroup">
                        <button 
                            type="button" 
                            onClick={this.props.delete} 
                            id={this.props.id}>Delete Task
                        </button>
                        
                        <button 
                            type = "button" 
                            onClick={this.editingModeInput}>Edit Task
                        </button> 
                    </div>
                    {/* provides each task with a set of delete and edit button to trigger events */}
                </li>
            )
        } 
        return output; 
    }   
}    

export default ToDoTask;