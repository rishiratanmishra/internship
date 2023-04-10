import React from 'react'
import './navbar.css'
import logo from './../../images/logo.png'
const Navbar = () => {
    return (
        <>
        
            <nav className='navbar'>
                <img src={logo} alt='logo' />
                <ul>
                <li>Our Solutions</li>
                <li>Resources</li>
                <li>About Us</li>
                    <li>Career</li>
                    <button className='navbar-button'>Contact</button>

                    </ul>
            </nav>
        
        </>
  )
}

export default Navbar