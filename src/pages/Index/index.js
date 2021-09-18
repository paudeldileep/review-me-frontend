import React, { useEffect } from "react";

import ProductTile from "../../components/Product/ProductTile";
import { useAPI } from "../../utils/fetchHelper";
// import useFetchRequest from '../../utils/useFetchHook';
// import { allProductsSelector, fetchAllProducts, fetchOwnProducts } from '../../redux/productSlice';

export const Index = (props) => {
  //const dispatch=useDispatch()
  //const[isLoading,data,error]=useFetchRequest(url)

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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-screen w-full mt-1">
      <div className="md:col-span-3 pt-2 p-2 rounded-md">
        {response.error ? (
          <p className="text-lg text-purple-600 font-mono">
            {response.error.data.errors} !
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 xl:grid-cols-3">
          {renderedPosts}
          </div>
        )}
      </div>
      <div className=" pt-2 p-2 rounded-md"></div>
    </div>
  );
};
