import React from 'react'
import "./Header.css"
import logo from "../../assets/svg/01.svg"

function Header() {
  return (
    <header className='header'>
        <div className='head'>
            <div className='nav'>
                <div className='logo'>
                    <img src={logo} alt='' />
                    <h3>Organick</h3>
                </div>
                <ul></ul>
            </div>
            <div className='nav-user'></div>
        </div>
    </header>
  )
}

export default Header