import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BasicLoader from "../../components/LoadingScreen/BasicLoader";
import { Link } from "react-router-dom";

import ProductTile from "../../components/Product/ProductTile";
import AllUsers from "../../components/Users/AllUsers";
import { useAPI } from "../../utils/fetchHelper";
// import useFetchRequest from '../../utils/useFetchHook';
// import { allProductsSelector, fetchAllProducts, fetchOwnProducts } from '../../redux/productSlice';

export const Index = (props) => {
  //const dispatch=useDispatch()
  //const[isLoading,data,error]=useFetchRequest(url)

  const isAuthenticated=useSelector(state=>state.user.isAuthenticated);
  const [response, setResponse] = useAPI("/product/all");

  useEffect(() => {
    return setResponse();
  }, []);

  console.log("isLoading", response.isLoading);
  console.log("error", response.error);
  //console.log('res data'+response.data)
  const renderedPosts = response.data && response.data.map(post=>(
    <ProductTile key={post._id} post={post} />
  ))

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-screen w-full mt-1 py-2 px-2 bg-gray-400">
      <div className="md:col-span-3 pt-2 p-2 rounded-md shadow-md bg-gray-500 border-2 border-gray-300">
        {response.error ? (
          <p className="text-lg text-purple-600 font-mono">
            {response.error.data ? response.error.data.errors : <p className="text-red-500">Something went Wrong! Try Again</p>}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 xl:grid-cols-3">
          {response.isLoading && <BasicLoader>Loading data...</BasicLoader>}
          {renderedPosts}
          
          </div>
        )}
      </div>
      {/* right div section */}
      <div className=" pt-2 p-2 rounded-md shadow-md border-2 border-gray-300">
        <div className="userlist w-full">
            <h2 className="text-left ml-2 font-mono tracking-tighter text-xl mb-2">Personalities</h2>
            {isAuthenticated ?<AllUsers/> : <Link to="/login" className="bg-purple-500 rounded-md shadow-sm p-2 mt-2">Login to Continue</Link> }
        </div>
      </div>
    </div>
  );
};
