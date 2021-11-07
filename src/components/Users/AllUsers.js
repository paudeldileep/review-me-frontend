import { UserIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAPI } from "../../utils/fetchHelper";
import TopUsers from "./TopUsers";

const AllUsers = () => {
  const [response, setResponse] = useAPI("/user/all");

  let renderedUsers = null;

  useEffect(() => {
    setResponse();
  }, []);

  if (response.data) {
    renderedUsers = response.data.map((user) => (
      <Link
        key={user._id}
        to={`/user/${user._id}`}
        className="my-2 rounded-md py-1 flex flex-col flex-shrink-0 justify-center px-2 group transition transform duration-300 hover:scale-105"
      >
        <span className="px-1 mt-2">
          {user.photo ? (
            <img
              src={user.photo}
              alt={user.firstname}
              className="w-16 h-16 rounded-full shadow-sm ring-1 ring-purple-600"
            />
          ) : (
            <UserIcon className="w-16 h-16 rounded-full shadow-sm ring-1 ring-purple-600 text-gray-500" />
          )}
        </span>
        <span className="opacity-0 group-hover:opacity-95 text-gray-600">
          {user.firstname} {user.lastname}
        </span>
      </Link>
    ));
  }

  return (
    <div className="flex flex-col w-full">
        <h2 className="text-left ml-2 font-mono tracking-tighter text-xl mb-2">
            Personalities
          </h2>
      <div className="ml-2 flex overflow-x-scroll w-full h-28 max-h-40 scrollbar-hide">
        {renderedUsers}
      </div>
      <div>
        <h2 className="text-lg ml-3 mt-2 font-mono tracking-tighter">Top Users</h2>
        <TopUsers />
      </div>
    </div>
  );
};

export default AllUsers;
