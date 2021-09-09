//Individual post tile component

import React from 'react';
import { Link } from 'react-router-dom';

const PostTile=(props)=>{
    
    const{post}=props

    return(<Link to={`/product/${post.title}`}><div className="border-2 border-purple-400 rounded-md shadow-md mb-2 mx-4 px-4 py-2">
       <div className=" h-60 w-full flex justify-center"><img className="h-full rounded-md" src={post.productImage} alt={post.title}/></div>
       <h2 className=" text-3xl font-mono font-bold tracking-tighter my-2">{post.title}</h2>
       <div className="flex justify-between my-2">
        <span className="font-mono tracking-tighter">{post.postedBy.firstname}</span>
        <span className="text-xs font-mono">{post.posted}</span>
       </div>
       <p>
           {post.description}
       </p>
    </div></Link>)
}

export default PostTile;