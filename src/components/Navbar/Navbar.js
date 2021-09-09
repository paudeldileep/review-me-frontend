import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/userSlice";
import { signOut } from "../../redux/userSlice";
import NavItem from "./NavItem";

const Navbar = () => {

  const isAuthenticated=useSelector(state=>state.user.isAuthenticated)
  const userData=useSelector(selectUserData);
  const dispatch=useDispatch();

  const handleSignOut=()=>{
      dispatch(signOut())
  }

  return (

    <div className="w-full h-14 border-b-2 border-purple-700 flex justify-between items-center bg-gray-300 rounded-md">
      {/* logo section */}
      <div>Review-Me</div>
      {/* link items section */}
      <div className="mr-2">
          <NavItem path="/" title="Feed"/>
          <NavItem path="/dashboard" title="My Space" />
          {isAuthenticated && userData && <><NavItem path="/dashboard" title={userData?.user.firstname}/> <button type="button" onClick={handleSignOut}>Sign Out</button> </>}
      </div>
    </div>
  );
};

export default Navbar;
