import React from 'react'
import './navbar.css';
import logo from '../../images/logo1.png'
const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="" />
        <h2>Muhammad <br /> <span> Haseeb</span></h2>
    </div>
  )
}

export default Navbar