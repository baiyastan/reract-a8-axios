import React, {useState} from 'react'
import "./Todo.css"

function TodoItem({item, deleteTodo, toggleTodo, editTodo}) {
  const [isEdit, setIsEdit] = useState(false)
  const [editText, setEditText] = useState(item.title) 

  const openEdit = () => {
    setIsEdit(true) 
  }

  const handleTextChange = (event) => {
    setEditText(event.target.value)
  }

  const handleCancel = () => {
    setIsEdit(false)
    setEditText(item.title)
  }

  const handleSave = () => {
    setIsEdit(false)
    editTodo(item.id, editText)
  }

  return (
    <div className='todo-item'>
      <input onChange={() => toggleTodo(item.id)} type='checkbox' checked={item.completed} />
      {
        isEdit ? (
          <> 
          <input type='text' value={editText} onChange={handleTextChange} />
          <button onClick={handleSave} className='btn'>Save</button>
          <button onClick={handleCancel} className='btn'>Cancel</button>
          </>
        ) : (
          <>
             <p className={item.completed ? "text" : ""}>{item.title}</p>
              <button onClick={openEdit} className='btn'>Edit</button>
              <button onClick={() => deleteTodo(item.id)} className='btn'>Delete Todo</button>
          </>
        )
      }
     
    </div>
  )
}

export default TodoItem