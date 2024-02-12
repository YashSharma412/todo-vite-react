import React, { useContext } from "react";
import { TodoContest } from "../Contexts/TodoContext";

function TodoComponent({todo}) {
    const {deleteTodo, setEditId} = useContext(TodoContest)
  return (
    <div className="todo">
      <h4>Id :- {todo.id} </h4>
      <p>
        {todo.payload}
      </p>
      <div className="card__buttons">
        <button onClick={()=>setEditId(todo.id)}>Edit</button>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoComponent;
