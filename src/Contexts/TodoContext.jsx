import React, { useState } from "react";
import { createContext } from "react";
export const TodoContest = createContext();
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const addTodo = (todo) => {
    console.log("addTodo ran");
    setTodos([
      ...todos,
      {
        payload: todo,
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      },
    ]);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const editTodo = (payload) => {
    setTodos(todos.map(todo => {
      if(todo.id === editId){
        console.log("flag")
        return {...todo, payload: payload}
      } else {
        return todo;
      }
    }))
    setEditId(null)
  };

  return (
    <TodoContest.Provider value={{ todos, setTodos, addTodo, deleteTodo, editTodo, editId, setEditId }}>
      {children}
    </TodoContest.Provider>
  );
};

export default TodoProvider;
