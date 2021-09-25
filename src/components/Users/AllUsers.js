import { UserIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAPI } from '../../utils/fetchHelper';

const AllUsers=()=>{

    const[response,setResponse]=useAPI('/user/all')

    let renderedUsers=null

    useEffect(()=>{
        setResponse()
    },[])

    if(response.data){
        renderedUsers=response.data.map(user=><Link key={user._id} to={`/user/${user._id}`} className="my-2 shadow-sm rounded-md py-1 w-full flex items-center bg-gray-100 px-2">
            <span className="mr-2">{user.photo? <img src={user.photo} alt={user.firstname} className="w-5 h-5 rounded-full shadow-sm ring-1 ring-purple-600"/> : <UserIcon className="w-5 h-5 rounded-full shadow-sm ring-1 ring-purple-600"/>}</span>
            <span>{user.firstname} {user.lastname}</span>
        </Link>)
    }

    return <div className="flex flex-col items-start">
        {renderedUsers}
    </div>
}

export default AllUsers