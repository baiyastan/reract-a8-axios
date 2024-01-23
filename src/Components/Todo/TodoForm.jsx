import React, {useState} from 'react'

function TodoForm({addTodo}) {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText("")
  }

  return (
    <div className='form-container'>
      <form onSubmit={onSubmitHandler}>
        <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder='Enter new todo' />
        <button className='btn' type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm