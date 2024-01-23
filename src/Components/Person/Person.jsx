import React from 'react'

function Person({data}) {
  return (
    <div className='card'>
        <img src={data.img} alt='text' />
        <h4>{data.firstName} {data.lastName}</h4>
        <h5>{data.email}</h5>
    </div>
  )
}

export default Person