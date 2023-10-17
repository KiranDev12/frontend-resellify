
import './Navbar.css';
import logo from '../../assets/logo.png';  // Corrected import
import React, { useState } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Button from '../Button/Button';
function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <Searchbar/>
      <Button label="Login" />
      <Button label="Register" />
    </div>
  );
}

export default Navbar;
