import React from 'react'

function User({item}) {
  return (
    <div >
        <h5>{item.name}</h5>
        <img src={item.avatar} alt={item.name} />
        <p>{item.lastName}</p>
        <button onClick={() => openPopup(item.id)}>update</button>
        <button>delete</button>
    </div>
  )
}

export default User