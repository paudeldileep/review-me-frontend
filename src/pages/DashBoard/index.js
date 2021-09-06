import React, { useEffect, useState } from "react";
import NewProductForm from "../../components/DashBoard/NewProductForm";
import PostsGrid from "../../components/Post/PostsGrid";
// import { Buttons } from "../../theme/theme";
import setAuthToken from "../../utils/setAuthToken";

export const DashBoard = (props) => {
  // const simpleButtonStyle = Buttons["simpleButton"];

  const [isPosting, setIsPosting] = useState(false);

  //todo : move this to somewhere else :-)
  useEffect(()=>{
      setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNGVmMjJiNzE2ZWUyOTM1ODhmMDhiIn0sImlhdCI6MTYzMDg1OTA0MiwiZXhwIjoxNjMxMjkxMDQyfQ.F7bMOYvLok6zGfngL8hYHHQqxxput_nM09WgsMIPEnI")
  },[])

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
            <PostsGrid category="private"/>
      </div>
    </div>
  );
};
