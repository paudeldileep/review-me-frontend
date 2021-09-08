import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewProductForm from "../../components/DashBoard/NewProductForm";
import PostTile from "../../components/Post/PostTile";
import { fetchOwnProducts, ownProductsSelector } from "../../redux/productSlice";
// import { Buttons } from "../../theme/theme";


export const DashBoard = (props) => {
  // const simpleButtonStyle = Buttons["simpleButton"];

  const [isPosting, setIsPosting] = useState(false);

  const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchOwnProducts())
    },[dispatch])

    const allPosts=useSelector(ownProductsSelector)

    const renderedPosts=allPosts && allPosts.map(post=><PostTile key={post._id} post={post}/>)
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 min-h-screen w-full mt-1">
      {/* left sidebar section */}
      <div className="border-2 border-purple-400 pt-2 p-2 rounded-md">
        <h2>Sidebar</h2>
        <div className="togglePost">
          <button
            type="button"
            className="rounded-sm border border-blue-100" 
            onClick={() => setIsPosting(!isPosting)}
          >
            New Product +
          </button>
        </div>
      </div>
      {/* main content section */}
      <div className="sm:col-span-3 pt-2 p-2 border-2 border-purple-400 rounded-md">
            {isPosting && <NewProductForm/>}
            {renderedPosts}
      </div>
    </div>
  );
};
