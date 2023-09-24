import React from "react";
import { useTodoContext } from "../context/TodoProvider";

const UpdateTodo = ({ todo }) => {
 const { editId, setEditId, handleCheck, handleDelete, handleEdit } =
  useTodoContext();

 return (
  <li className="todo">
   <input
    type="checkbox"
    checked={todo.completed}
    onChange={() => handleCheck(todo.id)}
    disabled={editId}
   />
   {editId === todo.id ? (
    <input
     type="text"
     value={todo.title}
     onChange={(e) => handleEdit(todo.id, e.target.value)}
    />
   ) : (
    <span
     className={`todo-title ${todo.completed ? "checked" : "unchecked"} 
     `}
    >
     {todo.title}
    </span>
   )}
   {editId === todo.id ? (
    <button onClick={() => setEditId(null)}>✅</button>
   ) : (
    <button
     className="del-button"
     onClick={() => setEditId(todo.id)}
     //  disabled={todo.completed}
    >
     ✏️
    </button>
   )}
   <button className="del-button" onClick={() => handleDelete(todo.id)}>
    🗑️
   </button>
  </li>
 );
};

export default UpdateTodo;
