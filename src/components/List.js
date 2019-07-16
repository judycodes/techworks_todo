import React, { Component } from 'react';
import ToDoTask from './ToDoTask';

class ToDoList extends Component {
    constructor(){
        super();
        this.state = {
          todos: [
            {
                task: "Wake up",
                completed: false
              }, 
              {
                task: "Take a shower",
                completed: false 
              },
      
               {
                task: "Drive to walk",
                completed: false 
              },
      
               {
                task: "Teach",
                completed: false
              },
      
               {
                task: "Git commit all code",
                completed: false
              }
          ],
              
          currentToDo: {
            task: "",
            completed: false
          },

          id: 0
          }
        }
      
    
      handleChange = event => {
        //console.log(event.target.value); //this shows the input values as it is typed into the input text box
        this.setState({
          currentToDo : {
            task: event.target.value,
            completed: false    
        }
        });
      };
    
      addTask = event => {
        event.preventDefault(); //stop propogation
        //refresh/rerendering is the default action 
        //console.log("addItem fires!") //shows in console the addItem method being fired from the submission of form data
         this.setState({
           todos: [...this.state.todos, this.state.currentToDo],
           
         },() => console.log(this.state.todos, 'todos list') //outputs prevstate of todos with current todo added
         );
        
      }

      deleteTask =(event)  => { /// this index is the index of the element that you don't want
            let index = parseInt(event.target.id);
            console.log('deleteTask() accessed, ', index);
          this.setState({
            todos: this.state.todos.filter((task, todosIndex) => todosIndex !== index)// todosIndex is the index of all
          })
          console.log('this.state.todos after reassigning ', this.state.todos)
    }

    //     editTask = index => {
          
    // }

     
  
      //console.log(this.state.currentToDo, 'current to do')
      
    render(){
        

        return(<div className = "container">
        <div className = "parts" >
          <h1 className= "title">To Do List</h1>
          <form className = "form" onSubmit = {this.addTask}>
            <label htmlFor = "taskName">Task Name: </label>
            <input onChange = {this.handleChange} name = "taskName" type = "text" placeholder = " Add Your Next Task Here!" />
            <button type = "submit">Add Task</button>
          </form>

          <ul className = "list">
            {this.state.todos.map((todo, index) => {
                return (
                <ToDoTask todo = {todo} id= {index} delete = {this.deleteTask} edit = {this.editTask}/> )}) 
            }
          </ul>
        
       </div>
      </div> 
        
      );
                  
       
    }
}


export default ToDoList;
