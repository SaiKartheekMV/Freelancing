// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src="logo.png" alt="logo" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Find Tasks</a></li>
        <li><a href="#projects">Find Professionals</a></li>
        <li><button className='publishBtn'><a href="#apply">Publish Project</a></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
