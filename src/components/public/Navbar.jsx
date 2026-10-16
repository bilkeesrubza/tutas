import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Tutas <span>LMS</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/tutors">Tutors</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/login" className="login-btn">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;

