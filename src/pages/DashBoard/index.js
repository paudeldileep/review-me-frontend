import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewProductForm from "../../components/DashBoard/NewProductForm";
import ProductTile from "../../components/Post/ProductTile";
import { fetchOwnProducts, ownProductsSelector } from "../../redux/productSlice";
import {PlusIcon} from '@heroicons/react/solid'
// import { Buttons } from "../../theme/theme";


export const DashBoard = (props) => {
  // const simpleButtonStyle = Buttons["simpleButton"];

  const [isPosting, setIsPosting] = useState(false);

  const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchOwnProducts())
    },[dispatch])

    const allPosts=useSelector(ownProductsSelector)

    const renderedPosts=allPosts && allPosts.map(post=><ProductTile key={post._id} post={post}/>)
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 min-h-screen w-full mt-1">
      {/* left sidebar section */}
      <div className="border-2 border-purple-400 pt-2 rounded-md">
        <div className="togglePost mx-1 ">
          <button
            type="button"
            className="rounded-md border border-blue-100 bg-purple-400 focus:bg-purple-700 transition-colors duration-200 px-1 py-1 font-mono h-9 w-24 flex justify-evenly items-center text-gray-50" 
            onClick={() => setIsPosting(!isPosting)}
          >
           New<PlusIcon className="h-5 w-5"/>
          </button>
        </div>
      </div>
      {/* main content section */}
      <div className="sm:col-span-3 pt-2 rounded-md">
            {isPosting && <NewProductForm/>}
            {renderedPosts}
      </div>
    </div>
  );
};
