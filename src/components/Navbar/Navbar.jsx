import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Hamburger from "./Hamburger";

const Navbar = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false) 

  const toogleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  };
  return (
    <>
      <div
        onClick={() => {
          toogleHamburger();
        }}
      >
        <Hamburger />
      </div>

      <div className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
      <div className='navbar-hamburger' onMouseLeave={()=>setHamburgerOpen(false)}>
          <Link className='link' to="/" >Home</Link>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/projects">Projects</Link>
          <Link className='link' to="/contact">Contact</Link>
        </div>
        <style jsx="true">
          {`.navbar-hamburger{
            display:${hamburgerOpen? 'flex' : 'none'}
          }
        `}
        </style>


    </>
  );
};

export default Navbar;
