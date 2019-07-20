import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './addTodo';
class App extends Component {
  state = {
    todos:[
      {id:1,content:"buy some stuff"},
      {id:2,content:"play mario kart"}
    ]
  }
  createTodo = (todo)=>{
      todo.id = Math.random();
      if(todo.content === ""){
        return null;
      }
      let new_todo = [...this.state.todos,todo];
      this.setState({
        todos : new_todo
      })
  }

  deleteTodo = (id)=>{
     console.log("delete id ",id)
     let new_todo = this.state.todos.filter(todo => {
       return todo.id !== id ;
      })
      this.setState({
         todos : new_todo
      })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo createTodo={this.createTodo}/>
      </div>
    );
  }
}

export default App;
