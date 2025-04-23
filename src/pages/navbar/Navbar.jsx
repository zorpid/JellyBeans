import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/BeanLogo2.png'; 

const Navbar = () => {
  
  return (
    <div className="navbar">
    <div className="navbar-logo">
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo-img" />
      </Link>
    </div>
      <div className="navbar-links" >
        <Link to="/">Home</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/beans">Beans</Link>
        <Link to="/combinations">Combinations</Link>
        <Link to="/history">History</Link>
      </div>
    </div>
  );
}

export default Navbar;
