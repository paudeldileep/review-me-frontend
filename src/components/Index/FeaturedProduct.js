import React from "react";
import { Link } from "react-router-dom";

const FeaturedProduct = ({ product }) => {
  return (
    <div className="w-52 h-full mx-2 relative shadow-sm rounded-md flex flex-col flex-shrink-0 group transition duration-300 transform hover:scale-105">
      <img
        src={product.productImage}
        alt={product.title}
        className=" object-cover object-center h-full w-full rounded-md"
      />
      
      <div className="absolute bg-gradient-to-b from-transparent to-purple-300 top-0 z-10 h-full w-full rounded-md">
      <button className="opacity-0 group-hover:opacity-95 relative top-1/2 w-full text-center z-10  bg-purple-200 text-gray-500 shadow-sm"><Link to={`/product/${product._id}`}>View Details</Link></button>
        <h2 className="bottom-0 absolute mb-1 ml-2 text-xl font-mono tracking-tighter text-gray-600 ">{product.title}</h2>
      </div>
    </div>
  );
};

export default FeaturedProduct;
