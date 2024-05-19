import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className='deskTopMenu'>
            <Link className='desktopMenuItem'>Home</Link>
            <Link className='desktopMenuItem'>About</Link>
            <Link className='desktopMenuItem'>Portfolio</Link>
            <Link className='desktopMenuItem'>Clients</Link>        
        </div>
        <button className='deskTopMenuBtn'>
            <img src={contactImg} alt='' className='deskTopMenuImg'/> Contact Me </button>
    </nav>
  )
}

export default Navbar