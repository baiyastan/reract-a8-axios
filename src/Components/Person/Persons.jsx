import React from 'react'
import "./Person.css"
import Person from './Person'

import persons from './data'

function Persons() {
  return (
    <div className='wrapper'>

      {
        persons.map((item) => (
          <Person key={item.id} data={item} />
        ))
      }
      
     
    </div>
  )
}

export default Persons