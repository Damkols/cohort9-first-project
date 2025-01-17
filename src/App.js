import React from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoProvider";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
 return (
  <div className="App">
   <TodoProvider>
    <div className="kanban-board">
     <div className="kanban-column">
      <h2>All Todos</h2>
      <TodoList todoStatus="all" />
     </div>
     <div className="kanban-column">
      <h2>Completed Todos</h2>
      <TodoList todoStatus="completed" />
     </div>
     <div className="kanban-column">
      <h2>Uncompleted Todos</h2>
      <TodoList todoStatus="uncompleted" />
     </div>
     <div className="kanban-column">
      <h2>Add New Todo</h2>
      <TodoInput />
     </div>
    </div>
   </TodoProvider>
  </div>
 );
};

export default App;
