import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InlineLoader from "../../components/LoadingScreen/InlineLoader";
import { userSignUp } from "../../redux/userSlice";

const SignUp = (props) => {
  //get signup status to show loading screen
  const signup_status = useSelector((state) => state.user.status);
  const signup_error = useSelector((state) => state.user.error);

  console.log(signup_error);
  //const renderedErrors=signup_error.map(err=><p>{err}</p>)

  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstname && lastname && email && password) {
      //dispatch not finished

      dispatch(userSignUp({ firstname, lastname, email, password }));
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
    }
  };

  let canSignUp =
    Boolean(firstname) &&
    Boolean(lastname) &&
    Boolean(email) &&
    Boolean(password);

    if(signup_status==='loading'){
        canSignUp=false
    }

  return (
    <div className="signup_form rounded-md w-96 min-w-min max-w-screen-md h-3/4 border-b-2 border-purple-700 shadow-2xl bg-gray-50 backdrop-filter backdrop-blur-lg bg-opacity-20">
      {signup_error && (
            <p className="my-1 text-red-600 font-serif text-center">{signup_error.errors}!!</p>
          )}
      <h2 className="text-center font-mono text-3xl font-bold tracking-tighter mt-2 text-purple-900">
        Welcome Onboard
      </h2>
      <h4 className="ml-4 text-gray-600 sm:text-purple-200 text-lg mt-8 mb-2">
        Register to Continue
      </h4>
      <p className="text-xs text-red-400 ml-4 font-mono tracking-tighter">
        *All fields are mandatory
      </p>
      <div>
        <form className="flex flex-col mx-4" onSubmit={handleSubmit}>
          <input
            className="border-b-2 focus:outline-none focus:border-purple-800 p-1 my-2 bg-transparent placeholder-purple-100 text-purple-100 text-lg"
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />

          <input
            className="border-b-2 focus:outline-none focus:border-purple-800 p-1 my-2 bg-transparent placeholder-purple-100 text-purple-100 text-lg"
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            className="border-b-2 focus:outline-none focus:border-purple-800 p-1 my-2 bg-transparent placeholder-purple-100 text-purple-100 text-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-b-2 focus:outline-none focus:border-purple-800 p-1 my-2 bg-transparent placeholder-purple-100 text-purple-100 text-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

    
          <button
            disabled={!canSignUp}
            className="p-2 text-xl border border-purple-100 bg-purple-500 focus:bg-purple-700 focus:shadow-md rounded-md w-11/12 self-center mt-4 flex justify-center items-center"
          >
            <span>Register</span> {signup_status === 'loading' && <InlineLoader customStyle="ml-8"/>}
          </button>
        </form>
      </div>
      <h4 className="text-center font-mono text-purple-100 mt-6">
        Already a Member ?{" "}
        <span
          onClick={props.onFormChange}
          className="cursor-pointer text-lg text-gray-800"
        >
          Sign In
        </span>{" "}
      </h4>
    </div>
  );
};

export default SignUp;
