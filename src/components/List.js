import React, { Component } from 'react';
import ToDoTask from './ToDoTask';

class ToDoList extends Component {
    constructor(){
        super();
        this.state = {
          todos: [
          ],
              
          currentToDo: {
            id: Date.now(),
            task: "",
            completed: false
          },
          }
        }
      
    
      handleChange = event => {
        //console.log(event.target.value); //this shows the input values as it is typed into the input text box
        this.setState({
          currentToDo : {
            id: Date.now(),
            task: event.target.value,
            completed: false    
        }
        });
      };
    
      addItem = event => {
        event.preventDefault(); //stop propogation
        //refresh/rerendering is the default action 
        //console.log("addItem fires!") //shows in console the addItem method being fired from the submission of form data
         this.setState({
           todos: [...this.state.todos, this.state.currentToDo],
           
         });
        
         console.log(this.state.todos, 'todos list');
         console.log(this.state.currentToDo, 'current to do')
      }
  

      
    render(){
        return(<div className = "container">
        <div className = "parts" >
          <h1 className= "title">To Do List</h1>
          <form className = "form" onSubmit = {this.addItem}>
            <label htmlFor = "taskName">Task Name: </label>
            <input onChange = {this.handleChange} name = "taskName" type = "text" placeholder = " Add Your Next Task Here!" />
            <button type = "submit">Add Task</button>
          </form>

          <ul className = "list">
            {this.state.todos.map((todo) => {
                return (
                <ToDoTask todo = {todo}/>)}) 
            }
          </ul>
        
       </div>
      </div> 
        
      );
                  
       
    }
}


export default ToDoList;
