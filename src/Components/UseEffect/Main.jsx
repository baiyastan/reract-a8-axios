import React, {useState, useEffect} from 'react'
import "./Main.css"
import User from './User'

const API = "https://reqres.in/api/users"

function Main() {
    const [user, setUser] = useState([])
    const [aboutUser, setAboutUser] = useState({})

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((x) => setUser(x.data))
    }, [])
    

    function getUserId(id) {
        fetch(`https://reqres.in/api/users/${id}`)
            .then((res) => res.json())
            .then((data) => setAboutUser(data.data))
    }


  return (
    <div>
        <div className='user'>
            {
                user.map((item) => (
                    <User key={item.id} data={item} getUser={getUserId} />
                ))
            }
        </div>
        <div className='about'>
            <img src={aboutUser.avatar} alt='avatar' />
        </div>
    </div>
  )
}

export default Main