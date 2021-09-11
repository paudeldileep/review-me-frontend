import { LoginIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const SignInButton=()=>{
    return(<button className="flex justify-center items-center mx-2 font-bold font-mono tracking-tighter transform transition-transform duration-200 hover:scale-110">
        <LoginIcon className="h-5 w-5 text-purple-700"/><span className="text-purple-700"><Link to="/login">SignIn</Link></span>
    </button>)
}

export default SignInButton