import React, {useEffect, useState} from 'react'
import axios from "axios"

import "./Main.css"
import User from './User'

const API = 'https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/users'

function Post() {
    const [user, setUser] = useState([])
    const [active, setActive] = useState(false)

    const [updateUser, setUpdateUser] = useState({})

    console.log(updateUser)

    async function getUser() {
        try{
            const res = await axios.get(API)

            setUser(res.data)
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    async function openPopup(id) {
        setActive(true)
        try{
            const res = await axios.get(`${API}/${id}`)

            setUpdateUser(res.data)
        }catch(error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setUpdateUser({...updateUser, [name]: value})
    }

  return (
    <div>
        <div className='users'>

        {
            user.map((data) => (
               <User key={data.id} item={data} />
            ))
        }
        </div>

        {
            active && <div className='modal'>
                <div className='popup'>
                    <input 
                        onChange={handleChange} 
                        value={updateUser.name} 
                        type='text' 
                        name='name' 
                        placeholder='Name' 
                    />
                    <input 
                        onChange={handleChange} 
                        value={updateUser.lastName} 
                        type='text' 
                        name="lastName" 
                        placeholder='LastName'
                     />
                    <input 
                        onChange={handleChange} 
                        value={updateUser.avatar} 
                        type='url' 
                        name='avatar' 
                        placeholder='avatar url' 
                    />
                    <div className='group'>
                        <button className='save'>Save</button>
                        <button className='cansel'>Cansel</button>
                    </div>
                </div>
            </div>
        }

        
    </div>
  )
}

export default Post