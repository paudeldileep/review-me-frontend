import { UserIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { useAPI } from "../../utils/fetchHelper";
import {Link} from 'react-router-dom';

const TopUsers = () => {
  const [topUsers, setTopUsers] = useAPI("/user/top_users");

  useEffect(() => {
    setTopUsers("/user/top_users");
  }, []);

  const renderTopUsers =
    topUsers.data &&
    topUsers.data.map((user, index) => (
      <div key={index} className="w-11/12 ml-2 flex border border-gray-300 relative flex-wrap my-2 shadow-sm rounded-md transition-transform duration-300 transform hover:scale-105">
        <div className="mb-2">
          {user.photo ? (
            <img
              className="h-8 w-8 rounded-full"
              src={user.photo}
              alt={user.firstname}
            />
          ) : (
            <UserIcon className="h-8 w-8 text-purple-600" />
          )}
        </div>
        <div className="flex flex-col justify-center ml-2 flex-shrink-0 mb-2">
          <h2>
            {user.firstname} {user.lastname}
          </h2>
          <p className="text-xs text-gray-500 italic">
            Total Products: {user.count}
          </p>
        </div>
        <div className="ml-1 lg:absolute lg:right-0 mt-2 mb-2 mr-1">
            <Link to={`/user/${user._id}`} className="px-1 border border-purple-400 bg-purple-200 hover:bg-purple-300 focus:bg-purple-500 rounded-md w-20">View</Link>
        </div>
      </div>
    ));

  return <div className="top-users">{renderTopUsers}</div>;
};

export default TopUsers;
