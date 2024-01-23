import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from "./TodoList"

function Todo() {
  const [todos, setTodos] = useState([
    {title: "Go to course", completed: false, id:1},
    {title: "Read a book", completed: true, id:2},
    {title: "Go to gym", completed: false, id:3},
  ])

  const addTodoHandler = (text) => {
    const newTodo = {
      title: text,
      completed: false,
      id: todos.length + 1,
    }
    if(text.trim() !== ""){
      setTodos([...todos, newTodo])
    }
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((x) => x.id !== id))
  }

  const todoHandler = (id) => {
    setTodos(
      todos.map((x) => x.id === id ? {...x, completed: !x.completed} : {...x})
    )
  }

  const deleteCompletedHandle = () => {
    setTodos((todos) =>  todos.filter((x) => !x.completed))
  }

  const editTodoHandler = (id, text) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, title: text}: todo)
    )
  }

  const deleteHandlerAll = () => {
    setTodos([])
  }

  return (
    <div>
      <h1>Todo app</h1>
      <TodoForm addTodo={addTodoHandler} />
      <button onClick={deleteCompletedHandle} className='btn'>Clear</button>
      <button onClick={deleteHandlerAll}>DeleteAll</button>
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodoHandler} 
        toggleTodo={todoHandler} 
        editTodo={editTodoHandler}
      />
    </div>
  )
}

export default Todo