import React, { Component } from 'react'

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      todos: ["Wake up", "Take a shower", "Drive to walk", "Teach", "Git commit all code"],
      currentToDo: ""
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
    this.setState({
      todos: this.state.todos.push(this.state.currentToDo)
    })
    
    console.log(this.state.todos, 'all todos');
    console.log(this.state.currentToDo, 'current to do')
  }

  
  render(){
    return (
      <div className = "container">
        <form onSubmit = {this.addItem}>
          <label htmlFor = "taskName">Task Name: </label>
          <input onChange = {this.handleChange} name = "taskName" type = "text" placeholder = " Add Your Next Task Here!" />
          <button type = "submit">Add Task</button>
        </form>

        <ul className = "list">
          {this.state.todos.map((todo) => <li>{todo}</li> )}
        </ul>
      </div>
    )
  };
}

export default ToDoList;
