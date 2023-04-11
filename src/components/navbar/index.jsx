import React from "react";
import "./navbar.js";
import logo from "../../assets/logo.png";


import { Nav_bar, Nav_left, Nav_right, Navlink, Navlog } from "./navbar.js";
import Homedown from "./dropdown/index.jsx";
import Aboutdown from "./Aboutdrop/index.jsx";

const Navbar = () => {
  return (

    <Nav_bar>
      <Nav_left>
        <Navlog className="logo" src={logo} />
        </Nav_left>
      <Nav_right>
        <Navlink to="/" className="nav-hover" >
        <button> <Homedown/> </button> 
        </Navlink>

        <Navlink to="/products" className="nav-hover">
        <button> Products</button> 
        </Navlink>

        <Navlink to="/about" className="nav-hover">
        <button><Aboutdown/></button> 
        </Navlink>

        <Navlink to="/contact" className="nav-hover">
        <button> Contact</button> 
        </Navlink>

        <Navlink to="/stores" className="nav-hover">
        <button>Stores</button> 
        </Navlink>
        <div></div>
        <div></div>
        </Nav_right>
      </Nav_bar>
  );
};

export default Navbar;
