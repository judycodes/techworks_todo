import React, { Component } from 'react';
import ToDoList from './components/List';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          id : 1,
          task: "Wake up",
          completed: false
        }, 
        {
          id : 2,
          task: "Take a shower",
          completed: false 
        },
          
        {
          id : 3,
          task: "Drive to walk",
          completed: false 
        },
          
        {
          id : 4,
          task: "Teach",
          completed: false
        },
           
        {
          id : 5,
          task: "Git commit all code",
          completed: false
        }],
          
      currentToDo: {
        id: 6,
        task : "",
        completed: false
    }
      }
    }
  

  handleChange = event => {
    console.log(event.target.value); //this shows the input values as it is typed into the input text box
    this.setState({
      currentToDo : event.target.value
    })
  }

  addItem = event => {
    event.preventDefault(); //stop propogation
    //refresh/rerendering is the default action 
    //console.log("addItem fires!") //shows in console the addItem method being fired from the submission of form data
    // this.setState({
    //   todos: 
    // })
    
    // console.log(this.state.todos, 'all todos');
    // console.log(this.state.currentToDo, 'current to do')
  }

  // deleteItem = event => {
  //   this.setState({
  //      todos : [...this.state.todos.filter()
  //   })
  // }
  
  render(){
    return (
      <div className = "container">
        <div className = "parts" >
          <h1 className= "title">To Do List</h1>
          <form className = "form" onSubmit = {this.addItem}>
            <label htmlFor = "taskName">Task Name: </label>
            <input onChange = {this.handleChange} name = "taskName" type = "text" placeholder = " Add Your Next Task Here!" />
            <button type = "submit">Add Task</button>
          </form>

          <div>
              <ToDoList todos = {this.state.todos}/>
          </div>
        
       </div>
      </div>
    )
  };
}

export default App;
