import React, { useEffect, useState } from "react";

import NewProductForm from "../../components/DashBoard/NewProductForm";
import ProductTile from "../../components/Product/ProductTile";

import { PlusIcon, PencilAltIcon } from "@heroicons/react/solid";
import { useAPI } from "../../utils/fetchHelper";
import BasicLoader from "../../components/LoadingScreen/BasicLoader";
import Fade from "react-reveal/Fade";
import UserEditForm from "../../components/DashBoard/UserEditForm";
import { fetchUser, selectUserData } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const DashBoard = (props) => {
  // const simpleButtonStyle = Buttons["simpleButton"];
  const [response, setResponse] = useAPI("/product/own");
  const [isPosting, setIsPosting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch=useDispatch()
  const user = useSelector(selectUserData);

  useEffect(() => {
    setResponse("/product/own");
  }, []);

  const handlePostingtoggle = () => {
    setIsPosting(!isPosting);
    if (isEditing) {
      setIsEditing(false);
    }
  };

  const handleEditingtoggle = () => {
    setIsEditing(!isEditing);
    dispatch(fetchUser());
    if (isPosting) {
      setIsPosting(false);
    }
  };

  console.log(response)
  //was for re-fetching own product after new posting. but not required since admin approval required
  // const fetchOnPost = () => {
  //   setTimeout(function () {
  //     setResponse("/product/own");
  //   }, 1000);
  // };

  const renderedPosts =
    response.data &&
    response.data.map((post) => <ProductTile key={post._id} post={post} />);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 min-h-screen w-full mt-1 bg-gray-50">
      {/* left sidebar section */}
      <div className=" pt-2 rounded-md border-2 border-gray-300">
        <div className="togglePost mx-1 ">
          <button
            type="button"
            className="rounded-md border border-blue-600 bg-purple-400 hover:bg-purple-500 focus:bg-purple-700 transition-colors duration-200 px-1 py-1 my-2 font-mono h-9 w-1/2 flex justify-evenly items-center text-gray-50"
            onClick={handlePostingtoggle}
          >
            New Product
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="toggleEdit mx-1 ">
          <button
            type="button"
            className="rounded-md border border-blue-600 bg-purple-400 hover:bg-purple-500 focus:bg-purple-700 transition-colors duration-200 px-1 py-1 my-2 font-mono h-9 w-1/2 flex justify-evenly items-center text-gray-50"
            onClick={handleEditingtoggle}
          >
            Edit Profile
            <PencilAltIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* main content section */}
      <div className="sm:col-span-3 pt-2 rounded-md relative border-2 border-gray-300 bg-gray-100">
        {isPosting && (
          <Fade top>
            <div className="absolute top-0 left-0 z-10 w-full h-screen rounded-md  bg-purple-400 bg-opacity-40 backdrop-filter backdrop-blur-md">
              {" "}
              <NewProductForm onPost={handlePostingtoggle} />
            </div>
          </Fade>
        )}
        {isEditing && (
          <Fade top>
            <div className="absolute top-0 left-0 z-10 w-full h-screen rounded-md  bg-purple-400 bg-opacity-40 backdrop-filter backdrop-blur-md">
              <UserEditForm user={user} onEdit={handleEditingtoggle} />
            </div>
          </Fade>
        )}
        {response.error ? (
          <p className="text-lg text-red-400 font-mono ml-1">
            {response.error.data.errors} !
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 xl:grid-cols-3">
            {response.isLoading && <BasicLoader>Loading data...</BasicLoader>}
            {renderedPosts}
          </div>
        )}
      </div>
    </div>
  );
};
