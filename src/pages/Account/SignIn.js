import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InlineLoader from "../../components/LoadingScreen/InlineLoader";
import { userSignIn } from "../../redux/userSlice";

const SignIn = (props) => {
  const dispatch = useDispatch();

  //loading sign in status
  const signin_status = useSelector((state) => state.user.status);
  const signin_error = useSelector((state) => state.user.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const[error,setError]=useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      //dispatch
      dispatch(userSignIn({ email, password }));
      setEmail("");
      setPassword("");
    }
  };


  const renderErrors=signin_error ? signin_error.errors && signin_error.errors.map(err=><p className="my-1 text-xs text-red-600 font-serif text-center bg-gray-100 p-1">{err.msg}!!</p>) : '';

  const canSignIn = Boolean(email) && Boolean(password);
  return (
    <div className="login_form rounded-md border-b-2 border-purple-700 shadow-2xl w-96 min-w-min max-w-screen-md h-3/4 bg-gray-50 backdrop-filter backdrop-blur-lg bg-opacity-20">
      {signin_error && renderErrors}
      <h2 className="text-center font-mono text-3xl font-bold tracking-tighter mt-2 text-purple-900">
        Welcome Back
      </h2>
      <h4 className="ml-4 text-gray-600 sm:text-purple-200 text-lg mt-12 mb-1">
        Sign In to Continue
      </h4>
      <div>
        <form className="flex flex-col mx-4" onSubmit={handleSubmit}>
          <input
            className="border-b-2 focus:outline-none focus:border-purple-800 p-1 my-2 bg-transparent placeholder-purple-100 text-purple-100 text-xl"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-b-2 focus:outline-none focus:border-purple-800 p-1 my-2 bg-transparent placeholder-purple-100 text-purple-100 text-xl"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between items-center my-4 mx-2">
            <div>
              <label>
                <input type="checkbox" /> <span>Remember me</span>
              </label>
            </div>
            <p className="cursor-pointer">Forgot Password ?</p>
          </div>
          
          <button
            disabled={!canSignIn}
            className="p-2 text-xl border border-purple-100 bg-purple-500 focus:bg-purple-700 focus:shadow-md rounded-md w-11/12 self-center mt-4 flex justify-center items-center"
          >
            <span>Sign In</span>{" "}
            {signin_status === "loading" && <InlineLoader customStyle="ml-8" />}{" "}
          </button>
        </form>
      </div>
      <h4 className="text-center font-mono text-purple-100 mt-12">
        New Explorer?{" "}
        <span
          onClick={props.onFormChange}
          className="cursor-pointer text-lg text-gray-800"
        >
          Sign Up
        </span>{" "}
      </h4>
      
    </div>
  );
};

export default SignIn;
