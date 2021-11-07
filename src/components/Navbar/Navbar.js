
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import AccountDropDown from "./AccountDropDown";

import NavItem from "./NavItem";
import SignInButton from "./SignInButton";

const Navbar = () => {

  const isAuthenticated=useSelector(state=>state.user.isAuthenticated)
  

  return (

    <div className="w-full h-14 border-b-2 border-purple-300 flex justify-between items-center bg-gray-100 rounded-md">
      {/* logo section */}
      <div><NavLink to="/"><img src="review-me-logo.png" alt="review-me-logo"/></NavLink></div>
      {/* link items section */}
      <div className="mr-2 flex items-center">
          <NavItem path="/" title="Feed"/>
          {isAuthenticated && <NavItem path="/dashboard" title="My Space" />}
          {isAuthenticated ? <AccountDropDown/> : <SignInButton/>}
      </div>

      
      
    </div>
  );
};

export default Navbar;
