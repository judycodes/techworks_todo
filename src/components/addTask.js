import React, { Component } from 'react'

class AddTaskForm extends Component {
    constructor(props){
        super(props);

//=======[STATE IN ADDTASKFORM COMPONENT]============          
        this.state = {
            taskName: ""
        }
    }

//=======[EVENTS]============    
    handleChange = event => { //captures the event info from input
        this.setState({
          [event.target.name] : event.target.value, //sets new value to taskName
          completed: false //input is given this key and value, since this is a new task to be added to the list and is automatically not completed as of yet
        }); 
      };

    handleSubmit = event => {
        event.preventDefault(); //stops propogation
        //refreshing the page is the default action on form submission 
        //console.log("addTask fires!") //shows in console the addTask method being fired from the submission of form data
        this.props.addTask(this.state); //passes in state object to allow for adding new task to list as newToDo
        this.setState({
            taskName : ""
        }) //this clears the input form after adding new task
    }  
    
//=======[RENDER]============    
    render() {
        return (
            <form className = "form" onSubmit = {this.handleSubmit}>
                <label htmlFor = "taskName">Task To Do: </label>
                  <input 
                    name = "taskName" 
                    //form submitted data in an HTTP request is packaged as name-value pairs. The name for each name-value pair is the name attribute of each input, and the value is the user input value. Without the name attribute, <input> element cannot provide its value to the server upon form submission.
                    //name attribute allows event.target.value to be the value of taskName from state, otherwise event.target.value would be set to an empty string when onChange occurs
                    value = {this.state.taskName} 
                    onChange = {this.handleChange} //captures changes in input  
                    type = "text" 
                    placeholder = " Add Your Next Task Here!" />
                  <button type = "submit">Add Task To List</button>
              </form>
        )
    } 

}

export default AddTaskForm;