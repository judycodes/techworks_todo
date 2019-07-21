import React, { Component } from 'react';
import ToDoTask from './ToDoTask';
import AddTaskForm from './addTask';

class ToDoList extends Component {
  constructor(props) {
    super(props);

//=======[STATE IN TODOLIST COMPONENT]============          
    this.state = { 
      todos: [ //tasks already in todo list
        {
          taskName : "Code",
          completed : false,
        },
        {
          taskName : "Practice",
          completed : false,  
        },
        {
          taskName : "Git Commit",
          completed : false,  
        }
      ],
    }
  }
      
//=======[METHODS]============
  addTask = newToDo => { //add task method
    //console.log(newToDo, 'newtodo') //newToDo is an object with taskName and input value, as well as completed: false key value, all of which are obtained from the addtaskform

    if(newToDo.taskName !== "") { //as long as newToDo input is not an empty string, new task will be added to todos array
      this.setState({
        todos : [...this.state.todos, newToDo] //...this.state.todos spread operator copies existing todos array and adds the newToDo object to the todos array
      }) //,() => console.log(this.state.todos, 'todos list') added after {} of setState({}) as a callback fn will display todos array with the new todo task included (at the same time the setState is reassigning)
    }  
  }

  deleteTask = (event) => { //delete task method
    // event contains data concerning the deleted/unwanted task
    let id = parseInt(event.target.id); //changes id data captured in event from clicking delete button in ToDoTask.js into a number and storing that number in a variable
    //console.log('deleteTask() accessed, ', id); //checks if method is accessed when clicked in ToDoTask.js and the event.target.id (known as variable id) is available to the deleteTask method.  
    this.setState({
      todos : this.state.todos.filter((task, todosId) => todosId !== id)// todosIndex is the individual id value of all tasks, task is used to represent each individual task/element in todos array
      //filter task an element parameter and then an index parameter from array
      //task represents each object element in todos array 
      //todosId represents each todo object's id
      //todosId !== id is condition for filtering out data, meaning whatever does not match that specified id, which is event.target.id value, will be returned back in array. 
      //Only the task/element with the specified id value from event.target.id will be taken out of todos array. 
    }) 
    //console.log('this.state.todos after filtering', this.state.todos) // shows todos content leftover after deleting specific task
  }

  editTask = (id, editedTaskName) => { //edit task method
          
    const updatedTodos = this.state.todos.map((task, todosId) => { //creates a new array 
            
      if(todosId === id) { //if the id from the handleUpdate event matches the task id 
        return {...task, taskName : editedTaskName} //overwrites taskName's original value to now be editedTaskName's  value
      } //else
        return task; //all the other tasks are returned unedited
    })
          
    if(editedTaskName === undefined || editedTaskName === "") { //prevents changes to taskName if save button is pressed without any changes or is an empty string
        return this.state.todos;
    } else { //if taskName is changed, the todos array will be updated with the new array, updatedTodos
        this.setState({
          todos : updatedTodos //reassigns todos to be the new array with the edited data
        }) 
      }
          //console.log(editedTaskName, 'editedTaskName passed in editTask method') 

  }

  completedStyling = (id) => { //method for applied completed css styling rules
    //console.log(id, 'id for completedstyling') //id is passed up from the checked/changed checkbox 
    const completedTodos = this.state.todos.map((task, todosId) => {//creates a new array

      if(todosId === id) { //compares the id of task that should have the completedStyling applied with each task's id
        //if matched, then checks for the following:
          
        if(!this.state.todos.completed) {  //if completed property is not false(meaning true), then do the following: 
        // console.log(!this.state.todos.completed, '!false, since it's supposed by initialized as false, then not false means the property is true) //returns true
        //console.log(this.state.todos[todosId].completed, 'initialized as false') //returns undefined if not accessing specificed task, needs [todosId] after this.state.todos and before .completed in order to toggle between false and true
        //console.log(!task.completed, 'task.completed') //changes as specified checkbox is checked and unchecked (if checkbox is checked, then task.completed is true, else it is false)

          return {...task, completed : !task.completed} //copies specified task properties, toggles and reassigns completed property only
                
        } 
      } //else if the task id doesn't match
            
          return task; //all other tasks returned with completed property unchanged
    })
          
    this.setState({ //once the above is done, state is updated/rerendered to show changes, if there are any
      todos: completedTodos //reassigns todos to completedTodos array to render the completed task(s) with the rest uncompleted and unaffected
    })
  }
         
//=======[RENDER]============      
  render(){

    //console.log(this.state.todos, 'todos array, useful for checking changes from edit, delete, checkbox changes')
      
    const todos = this.state.todos.map((todo, index) => { 
      //.map allows two parameters, (in this case, one task/todo from the todos list/array) an element and an index {.map gives an automatic index value which is later set to id attribute}
      //mapping the todos array returns a ToDoTask component to represent each task in the todos array and provides an index for each task. 

      return (
        <ToDoTask 
          todo = {todo} //allows access to each todo object(task) in todos array
          key = {index} //resolves warning: Each child in a list should have a unique "key" prop.
          id = {index} //provides id for each task, which is needed for deleting and editing tasks
          completedStyling = {this.completedStyling} //allows access to completedStyling method
          delete = {this.deleteTask} //allows access to deleteTask method 
          edit = {this.editTask} //allows access to editTask method
          /> 
      )
    }) 
     
      return(
        <div className = "container">

          <div className = "parts" >
          
            <h1 className= "title">To Do List</h1>
          
            <AddTaskForm addTask = {this.addTask}/>  
            {/* AddTaskForm component contains the input form for adding new tasks, as the name suggests
            //addTask = {this.addTask} is passed as props so that addTask.js can access the addTask method in List.js 
            //input form in addTask.js passes up the data addTask method needs 
            */}

            <ul className = "list">
              
              {todos} 
              {/* variable containing the mapped todos, lines 86-100 */}

            </ul>
          
          </div>

        </div>  
      ); 
  }
}

export default ToDoList;
