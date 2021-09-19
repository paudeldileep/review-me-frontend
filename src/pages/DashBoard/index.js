import React, { useEffect, useState } from "react";

import NewProductForm from "../../components/DashBoard/NewProductForm";
import ProductTile from "../../components/Product/ProductTile";

import { PlusIcon } from "@heroicons/react/solid";
import { useAPI } from "../../utils/fetchHelper";
import BasicLoader from "../../components/LoadingScreen/BasicLoader";

export const DashBoard = (props) => {
  // const simpleButtonStyle = Buttons["simpleButton"];
  const [response, setResponse] = useAPI("/product/own");
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    if (!isPosting) {
      setResponse();
    }
  }, [isPosting]);

  const handlePostingoggle = () => {
    setIsPosting(!isPosting);
  };

  const renderedPosts =
    response.data &&
    response.data.map((post) => <ProductTile key={post._id} post={post} />);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 min-h-screen w-full mt-1">
      {/* left sidebar section */}
      <div className=" pt-2 rounded-md">
        <div className="togglePost mx-1 ">
          <button
            type="button"
            className="rounded-md border border-blue-100 bg-purple-500 focus:bg-purple-700 transition-colors duration-200 px-1 py-1 font-mono h-9 w-24 flex justify-evenly items-center text-gray-50"
            onClick={handlePostingoggle}
          >
            New
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* main content section */}
      <div className="sm:col-span-3 pt-2 rounded-md">
        {isPosting && <NewProductForm onPost={handlePostingoggle} />}
        {response.error ? (
          <p className="text-lg text-purple-600 font-mono">
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
