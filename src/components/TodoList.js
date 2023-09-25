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

 return (
  <ul className="todoTabs">
   {filteredTodos.map((todo) => (
    <UpdateTodo key={todo.id} todo={todo} />
   ))}
  </ul>
 );
};

export default TodoList;
