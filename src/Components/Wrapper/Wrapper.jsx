import React from 'react'

function Wrapper({children, color}) {

    const style = {
        backgroundColor: color,
        width: "600px",
        padding: "20px",
        margin: "20px auto",
    }
  return (
    <div style={style}>
        <header>Logo contact about </header>
        {children}
        <footer>Footer contact</footer>
    </div>
  )
}

export default Wrapper