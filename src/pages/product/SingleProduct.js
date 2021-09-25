import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/userSlice";
import IconButton from "../../components/Product/IconButton";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { deleteProduct, fetchSingleProduct } from "../../redux/productSlice";

import { TimeAgo } from "../../components/utils/TimeAgo";
import ReactionButtons from "../../components/Product/ReactionButtons";
import Review from "../../components/Product/Reviews/Review";

import Fade from "react-reveal/Fade";
import EditProductForm from "./EditProduct";

const SingleProduct = ({ match, history }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const product = useSelector((state) => state.product.singleProduct);
  const error = useSelector((state) => state.product.errors);

  const { productId } = match.params;

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [productId]);

  const IconStyle = "h-5 w-5 text-purple-500";

  const handleEditButtonClick = () => {
    setIsEditing(true);
    //return <Redirect to={`/product/edit/${productId}`} />
  };

  const handleEditCancel=()=>{
    setIsEditing(false);
  }

  const handleOnUpdateSuccess=()=>{
    dispatch(fetchSingleProduct(productId));
  }

  const handleDelete = () => {
    dispatch(deleteProduct(productId));
    history.push("/dashboard");
  };

  return (
    <div className="mt-6 w-full max-w-screen-lg mx-auto min-h-screen relative">
      {/* wrapper */}
      {product ? (
        <div className="flex flex-col w-11/12 mx-auto shadow-lg rounded-md md:flex-row">
          {/* product image  */}

          <div className="h-full w-full md:w-1/2 relative">
            <img
              src={product.productImage}
              alt={product.title}
              className="h-full w-full rounded-t-md md:rounded-md"
            />

            <div className="flex justify-between">
              <h2>{product.title}</h2>
              {user._id === product.postedBy._id && isAuthenticated && (
                <div className="flex opacity-70">
                  <IconButton
                    Icon={PencilAltIcon}
                    IconStyle={IconStyle}
                    buttonText=""
                    onButtonClick={handleEditButtonClick}
                  />
                  <IconButton
                    Icon={TrashIcon}
                    IconStyle="h-5 w-5 text-red-500 ml-2"
                    buttonText=""
                    onButtonClick={handleDelete}
                  />
                </div>
              )}
            </div>
            <p>{product.description}</p>
            <div className="flex justify-between items-center w-full">
              <span>
                By{" "}
                <span className="font-mono tracking-tighter texl-lg">
                  {product.postedBy.firstname}
                </span>
              </span>
              <span className="text-xs font-mono">
                <TimeAgo timestamp={product.posted} />
              </span>
            </div>
            <div className="w-full">
              <ReactionButtons
                postId={product._id}
                reviews={product.reviews}
                likes={product.likes}
                hearts={product.hearts}
              />
            </div>
          </div>

          {/* product detail */}
          <div className="md:flex-1 w-full flex flex-col items-start md:mx-2 mt-2 px-1 md:mt-0 md:py-1">
            {/* reviews */}
            <Review productId={product._id} />
          </div>
          {/* {post && <ProductDetail post={post}/>}
       
        {error && <p className="text-center">{error}</p>}
        {user && isAuthenticated && <div className="flex justify-between mx-6">
                <IconButton Icon={PencilAltIcon} IconStyle={IconStyle} buttonText="Edit" onButtonClick={handleEditButtonClick}/>
                <IconButton Icon={TrashIcon} IconStyle="h-8 w-8 text-red-500" buttonText="Delete" onButtonClick={handleDelete}/>
            </div>} */}

          {/* pop up div for product edit */}
          {isEditing && (
            <Fade top>
              <div className="absolute top-1 left-1 z-10 rounded-md w-full h-screen border border-red-500 bg-purple-400 bg-opacity-40 backdrop-filter backdrop-blur-md">
                <EditProductForm product={product} onCancel={handleEditCancel} onUpdate={handleOnUpdateSuccess}/>
              </div>
            </Fade>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
