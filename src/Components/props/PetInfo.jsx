import React from 'react'

function PetInfo(props) {
    console.log(props)
  return (
    <h1>
        My name is {props.name} I'm {props.age} years old
    </h1>
  )
}

export default PetInfo