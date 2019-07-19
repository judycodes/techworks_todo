import React, { Component } from 'react';
import ToDoTask from './ToDoTask';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
          todos: [
            {
                task: "Study",
                completed: false,
                edit: false
              }, 
              {
                task: "Make and pack lunch",
                completed: false,
                edit: false 
              },
      
               {
                task: "Get to QCC",
                completed: false,
                edit: false 
              },
      
               {
                task: "Read up on current tech",
                completed: false,
                edit: false
              },
      
               {
                task: "Git commit all code",
                completed: false,
                edit: false
              }
          ],
              
          currentToDo: {
            task: "",
            completed: false,
            edit: false
          },

          }
        }
      
    
      handleChange = event => { //captures the event info from input
        //console.log(event.target.value); //this shows the input values as it is typed into the input text box
        this.setState({
          currentToDo : {
            task: event.target.value,
            completed: false    
        }
        });//this sets the currentToDo so that it can be added on form submission/when addTask method fires
      };
    
      addTask = event => { //add task method
        event.preventDefault(); //stop propogation
        //refresh/rerendering is the default action on form submission 
        //console.log("addTask fires!") //shows in console the addTask method being fired from the submission of form data
         this.setState({
           todos: [...this.state.todos, this.state.currentToDo],
           
         }) 
         //,() => console.log(this.state.todos, 'todos list'); added within setState({}) will display todos array with current todo included at the same time the setState is reassigning
      }

      deleteTask =(event)  => { //delete task method
            // event contains data concerning the deleted/unwanted task
            let id = parseInt(event.target.id); //changes id information captured in event into a number and storing that number into a variable
            //console.log('deleteTask() accessed, ', id); //checks if method is accessed when clicked in todotask.js and the event.target.id known as id is available.  
          this.setState({
            todos: this.state.todos.filter((task, todosId) => todosId !== id)// todosIndex is the individual id value of all tasks, task is used to represent each individual task/element in todos array
            //filter must have an element parameter and then an index parameter from array
            //todosId !== id is condition for filtering out data, meaning whatever does not match that specified id, which is event.target.id value, will be returned back in array. 
            //Only the task/element with the specified id value from event.target.id will be taken out of todos array. 
          }) 
          //console.log('this.state.todos after filtering', this.state.todos) // shows todos content after deleting specific task
    }

        editTask = event => { //edit specific task method
            
          
    }

     
  
      //console.log(this.state.currentToDo, 'current to do')
      
    render(){
        

        return(
        <div className = "container">
          <div className = "parts" >
            <h1 className= "title">To Do List</h1>
              <form className = "form" onSubmit = {this.addTask}>
                <label htmlFor = "taskName">Task Name: </label>
                  <input onChange = {this.handleChange} name = "taskName" type = "text" placeholder = " Add Your Next Task Here!" />
                  <button type = "submit">Add Task</button>
              </form>

            <ul className = "list">
              {this.state.todos.map((todo, index) => { //.map allows two parameters, (in this case one task from todos list/array) element and index {gives an automatic index value which is later set to id attribute}
                return (
                <ToDoTask todo = {todo} key = {index} id= {index} delete = {this.deleteTask} edit = {this.editTask}/> )}) 
            }
            </ul>
          </div>
        </div>  
      );
                  
       
    }
}


export default ToDoList;
