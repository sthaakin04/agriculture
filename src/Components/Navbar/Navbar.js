import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <header>
        <h2><a href="#">Yougik</a></h2>
        <ul className="nav">
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">services</a></li>
            <li><a href="#">contact</a></li>
        </ul>  
    </header>
    </div>
  )
}
