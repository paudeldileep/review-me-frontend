import React, { useEffect, useState } from "react";
import NewProductForm from "../../components/DashBoard/NewProductForm";
import { Buttons } from "../../theme/theme";
import setAuthToken from "../../utils/setAuthToken";


// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser, selectFetchedUsers, selectUserData } from '../../redux/userSlice';

//const parentDivStyle="grid-cols-1 md:grid-cols-4 gap-4"
//const sideBarStyle=""
export const DashBoard = (props) => {
  const simpleButtonStyle = Buttons["simpleButton"];

  const [isPosting, setIsPosting] = useState(false);

  useEffect(()=>{
      setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNGVmMjJiNzE2ZWUyOTM1ODhmMDhiIn0sImlhdCI6MTYzMDg1OTA0MiwiZXhwIjoxNjMxMjkxMDQyfQ.F7bMOYvLok6zGfngL8hYHHQqxxput_nM09WgsMIPEnI")
  },[])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 min-h-screen w-full">
      {/* left sidebar section */}
      <div className="border-r-2 border-red-400 pt-2 pl-2">
        <h2>Sidebar</h2>
        <div className="togglePost">
          <button
            type="button"
            className={simpleButtonStyle}
            onClick={() => setIsPosting(!isPosting)}
          >
            New Product +
          </button>
        </div>
      </div>
      {/* main content section */}
      <div className="sm:col-span-3 pt-2 pl-2">
            {isPosting && <NewProductForm/>}
            <div>
                main content
            </div>
      </div>
    </div>
  );
};
