import { CogIcon, LogoutIcon, UserCircleIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserData, userSignOut } from '../../redux/userSlice';

const AccountDropDown=()=>{

    //get userdata from store
    const user=useSelector(selectUserData)

    const dispatch=useDispatch()
    //to control dropdown visibility
    const [isVisible,setIsVisible]=useState(false)
    const handleVisibility=()=>setIsVisible(!isVisible)

    const handleSignOut=()=>dispatch(userSignOut())

    //custom drop down menu style
    const dropDownStyle= classNames({'opacity-0 invisible absolute right-0 transform transition-all duration-500 ease-in-out ':!isVisible, 'opacity-100 z-10 visible absolute right-0 transform translate-y-5 -translate-x-2 shadow-md rounded-md py-1 px-2 w-40 transition-all duration-500 ease-in-out':isVisible})
    return <div className="mx-2 relative">
            <button className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110" type="button" onClick={handleVisibility}>
                <span className="text-purple-600 font-mono">{user.firstname}</span>
                <span>{user.photo ? <img src={user.photo} className="w-10 h-10" alt={user.firstname}/> : <UserCircleIcon className="w-10 h-10 text-purple-400"/>}</span>
            </button>
            <nav className={dropDownStyle}>
                <ul className="divide-y divide-purple-500">
                <li className="flex justify-start items-center text-xl"><UserCircleIcon className="h-5 w-5 text-purple-500 mr-1"/><Link to={`/user/${user._id}`} className="font-mono text-gray-500">Profile</Link></li>
                    <li className="flex justify-start items-center text-xl"><CogIcon className="h-5 w-5 text-purple-500 mr-1"/><span className="font-mono text-gray-500">Settings</span></li>
                    <li className="text-xl"><button type="button" className="flex justify-start items-center" onClick={handleSignOut}><LogoutIcon className="h-5 w-5 text-red-500 mr-1"/><span className="font-mono text-gray-500">Sign Out</span></button></li>
                </ul>
            </nav>
    </div>
}

export default AccountDropDown