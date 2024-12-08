import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="deskTopMenu">
        <Link
          to="home"
          className="desktopMenuItem"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="about"
          className="desktopMenuItem"
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          to="portfolio"
          className="desktopMenuItem"
          spy={true}
          smooth={true}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          to="clients"
          className="desktopMenuItem"
          spy={true}
          smooth={true}
          duration={500}
        >
          Clients
        </Link>
      </div>
      <button className="deskTopMenuBtn">
        <img src={contactImg} alt="" className="deskTopMenuImg" /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
