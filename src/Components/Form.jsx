import React, { useContext, useEffect, useState } from 'react'
import { TodoContest } from '../Contexts/TodoContext'
function Form() {
    const [value, setValue] = useState("")
    const {todos, addTodo, editId, editTodo} = useContext(TodoContest)
    const resetValues = ()=>{
        setValue("")
    }
    useEffect(()=>{
      if (editId !== null) {
        todos.map(todo => {
          if(todo.id === editId){
            setValue(todo.payload)            
          }
        })
      }
    }, [editId])
    const validateInput = ()=>{
      if (value.trim().length > 0) return true
      return false;
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!validateInput()){
          console.log("No todo msg received")
          return;
        }
        if (editId !== null) {
          editTodo(value)
        }
        addTodo(value)
        resetValues()
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter a todo' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit'>{ editId !== null ? "Edit":"Add"}</button>
    </form>
  )
}

export default Form