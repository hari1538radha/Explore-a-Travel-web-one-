import React from 'react'
import "./NavBar.css"
import Logo from "../Images/Explore.jpg"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='NavBarConatiner'>
        <img  className='Logo' src={Logo}/>
        <Link to="/" ><button className='Btn-signin'>SIGN IN</button></Link>
        
    </div>
  )
}

export default NavBar