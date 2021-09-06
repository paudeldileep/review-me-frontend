import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="w-full h-14 border-b-2 border-purple-700 flex justify-between items-center bg-gray-300 rounded-md">
      {/* logo section */}
      <div>Review-Me</div>
      {/* link items section */}
      <div className="mr-2">
          <NavItem path="/" title="Feed"/>
          <NavItem path="/dashboard" title="My Space" />
      </div>
    </div>
  );
};

export default Navbar;
