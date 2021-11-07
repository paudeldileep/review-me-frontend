import { Menu, Transition } from "@headlessui/react";
import { CogIcon, LogoutIcon } from "@heroicons/react/outline";
import { UserCircleIcon, UserIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserData, userSignOut } from "../../redux/userSlice";

const AccountDropDown = () => {
  //get userdata from store
  const user = useSelector(selectUserData);

  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(userSignOut());

  //custom drop down menu style
  // const dropDownStyle= classNames({'opacity-0 invisible absolute right-0 transform transition-all duration-500 ease-in-out ':!isVisible, 'opacity-100 z-10 visible absolute right-0 transform translate-y-5 -translate-x-2 shadow-md rounded-md py-1 px-2 w-40 transition-all duration-500 ease-in-out':isVisible})
  return (
    <div className="mx-2 relative">
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="max-w-xs h-10 w-w-10 flex items-center justify-center text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="text-purple-600 font-mono">{user.firstname}</span>
            {user.photo ? (
              <img
                className="h-6 w-6 rounded-full"
                src={user.photo}
                alt={user.firstname}
              />
            ) : (
              <UserIcon className="h-6 w-6 text-purple-600" />
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-300 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/dashboard`}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "px-4 py-2 text-sm text-gray-700 w-full block"
                  )}
                >
                  <p className="flex items-center justify-start">
                    <UserCircleIcon className="h-5 w-5 text-purple-400 mr-1" />
                    <span>Profile</span>
                  </p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={``}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "px-4 py-2 text-sm text-gray-700 w-full block"
                  )}
                >
                  <p className="flex items-center justify-start">
                    <CogIcon className="h-5 w-5 text-purple-400 mr-1" />
                    <span>Settings</span>
                  </p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                  )}
                  onClick={handleSignOut}
                >
                  <p className="flex items-center justify-start">
                    <LogoutIcon className="h-5 w-5 text-red-400 mr-1" />
                    <span>Sign Out</span>
                  </p>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default AccountDropDown;
