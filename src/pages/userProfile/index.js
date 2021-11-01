import React from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import Profile from './Profile'

const UserProfile=(props)=>{

    const {userId}=useParams()

    console.log(userId)
    return <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-screen w-full mt-1 px-2 py-2">
        {/* side section */}
            <div className="shadow-md rounded-md py-2 px-2 bg-gray-400 border-2 border-gray-300">
                <Profile userId={userId}/>
            </div>
            {/* products sections */}
            <div className="md:col-span-3 pt-2 rounded-md shadow-md bg-gray-500 px-2">
                <Products userId={userId}/>
            </div>
    </div>
}

export default UserProfile