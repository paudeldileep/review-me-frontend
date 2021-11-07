//Individual post tile component

import React from "react";
import { Link } from "react-router-dom";
import { TimeAgo } from "../utils/TimeAgo";
import ReactionButtons from "./ReactionButtons";

const ProductTile = ({ post }) => {
  //const{post}=props
  const linkTitle = post._id;

  return (
    <div className=" rounded-md shadow-sm my-4 mx-2 pb-2 backdrop-filter backdrop-blur-lg bg-opacity-70 max-w-sm w-80  bg-gray-200 border border-purple-300 transition duration-300 transform hover:scale-105 hover:shadow-md">
      <Link to={`/product/${linkTitle}`}>
        <div className="h-60 w-full py-1 px-1 flex m-auto justify-center">
          <img
            className="h-full rounded-md object-cover object-center"
            src={post.productImage}
            alt={post.title}
          />
        </div>
        <h2 className="px-4 text-3xl font-mono font-bold tracking-tighter my-2 text-gray-700">
          {post.title}
        </h2>
        <div className="flex justify-between my-2 px-4 text-gray-600">
          <span className="font-mono tracking-tighter">
            {post.postedBy.firstname}
          </span>
          <span className="text-xs font-mono">
            <TimeAgo timestamp={post.posted} />
          </span>
        </div>
        <p className="px-4 text-gray-600">
          {post.description.substr(0, 50)}
          <span>...</span>
        </p>
      </Link>
      <div className="px-4">
        <ReactionButtons
          postId={post._id}
          reviews={post.reviews}
          likes={post.likes}
          hearts={post.hearts}
        />
      </div>
    </div>
  );
};

export default ProductTile;
