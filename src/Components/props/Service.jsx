import React from 'react'
import "./Service.css"

function Service({data}) {
  return (
    <div className={`item-service ${data.student ? 'bg1' : 'bg2'}`}>
        <img src={data.image} alt={data.name} />
        <h1>{data.name}</h1>
        <div>{data.lastname}</div>
        <div>{data.city}</div>
        <div>{data.age}</div>
    </div>
  )
}

export default Service