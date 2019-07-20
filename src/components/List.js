import React, { Component } from 'react';
import ToDoTask from './ToDoTask';
import AddTaskForm from './addTask';

class ToDoList extends Component {
    constructor(props){
        super(props);

//=======[STATE IN TODOLIST COMPONENT]============          
        this.state = { 
          todos: [ //tasks already in todo list
            {
            taskName: "Code",
            completed: false,
            },
            {
            taskName: "Practice",
            completed: false,  
            },
            {
            taskName: "Git Commit",
            completed: false,  
            }
        ],
          
          }
        }
      
//=======[METHODS]============
      addTask = newToDo => { //add task method
        //console.log(newToDo, 'newtodo') //newToDo is an object with taskName and input value, as well as completed: false key value, all of which are obtained from the addtaskform

        if(newToDo.taskName !== ""){ //as long as newToDo input is not an empty string, new task will be added to todos array

          this.setState({
            todos: [...this.state.todos, newToDo] //...this.state.todos spread operator copies existing todos array and adds the newToDo object to the todos array
          }) 
          
          //,() => console.log(this.state.todos, 'todos list') added after {} of setState({}) as a callback fn will display todos array with the new todo task included (at the same time the setState is reassigning)
        }  
      }

      deleteTask = (event) => { //delete task method
            // event contains data concerning the deleted/unwanted task
            let id = parseInt(event.target.id); //changes id data captured in event from clicking delete button in ToDoTask.js into a number and storing that number in a variable
            //console.log('deleteTask() accessed, ', id); //checks if method is accessed when clicked in ToDoTask.js and the event.target.id (known as variable id) is available to the deleteTask method.  
          this.setState({
            todos: this.state.todos.filter((task, todosId) => todosId !== id)// todosIndex is the individual id value of all tasks, task is used to represent each individual task/element in todos array
            //filter task an element parameter and then an index parameter from array
              //task represents each object element in todos array 
              //todosId represents each todo object's id
            //todosId !== id is condition for filtering out data, meaning whatever does not match that specified id, which is event.target.id value, will be returned back in array. 
            //Only the task/element with the specified id value from event.target.id will be taken out of todos array. 
          }) 
          //console.log('this.state.todos after filtering', this.state.todos) // shows todos content leftover after deleting specific task
    }

        
      
      
//=======[RENDER]============      
    render(){


        const todos = this.state.todos.map((todo, index) => { 
        //.map allows two parameters, (in this case, one task/todo from the todos list/array) an element and an index {.map gives an automatic index value which is later set to id attribute}
        //mapping the todos array returns a ToDoTask component to represent each task in the todos array and provides an index for each task. 

       
        return (
        <ToDoTask 
          todo = {todo} 
          key = {index} 
          id= {index} 
          delete = {this.deleteTask} 
          edit = {this.editTask}
          /> )
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
              {/* variable containing the mapped todos, lines 89-102 */}

            </ul>
          
          </div>

        </div>  
      );
                  
       
    }
}


export default ToDoList;
