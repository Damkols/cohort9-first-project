import React from "react";
import { useTodoContext } from "../context/TodoProvider";
import UpdateTodo from "./UpdateTodo";

const TodoList = ({ todoStatus }) => {
 const { todos } = useTodoContext();

 const filteredTodos = todos.filter((todo) => {
  if (todoStatus === "completed") {
   return todo.completed;
  } else if (todoStatus === "uncompleted") {
   return !todo.completed;
  }
  return true;
 });

 const completedTodosCount = filteredTodos.filter(
  (todo) => todo.completed
 ).length;
 const uncompletedTodosCount = filteredTodos.length - completedTodosCount;

 let message = "";

 if (todos.length === 0) {
  message = "No todos available.";
 } else if (todoStatus === "completed" && completedTodosCount === 0) {
  message = "You have completed all todos!";
 } else if (todoStatus === "uncompleted" && uncompletedTodosCount === 0) {
  message = "You have no uncompleted todos!";
 }

 return (
  <div>
   <p>{message}</p>
   <ul className="todoTabs">
    {filteredTodos.map((todo) => (
     <UpdateTodo key={todo.id} todo={todo} />
    ))}
   </ul>
  </div>
 );
};

export default TodoList;
