import React, { useContext } from "react";
import TodoComponent from "./TodoComponent";
import { TodoContest } from "../Contexts/TodoContext";
function List() {
  const {todos} = useContext(TodoContest)
  return (
    <main className="main">
      {todos.length > 0 ? (
        <>
          <h2>My Todos...</h2>
          <div className="grid">
            {todos.map((todo) => (
              <TodoComponent key={todo.id} todo={todo}/>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>
            <center>No todos yet </center>
          </h1>
        </>
      )}
    </main>
  );
}

export default List;
