import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearErrors } from "../../redux/userSlice";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LogIn = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);

  const handleFormSwitch = () => {
    dispatch(clearErrors());
    setIsSignIn(!isSignIn);
  };

  let content = isSignIn ? (
    <SignIn onFormChange={handleFormSwitch} />
  ) : (
    <SignUp onFormChange={handleFormSwitch} />
  );

  return (
    <div className="h-screen w-full bg-purple-blob bg-center bg-no-repeat flex justify-center items-center">
      {content}
    </div>
  );
};

export default LogIn;
