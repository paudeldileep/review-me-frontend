import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductTile from '../../components/Post/ProductTile';
import { allProductsSelector, fetchAllProducts } from '../../redux/productSlice';

export const Index=(props)=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchAllProducts())
    },[dispatch])

    const allPosts=useSelector(allProductsSelector)

    const renderedPosts=allPosts && allPosts.map(post=><ProductTile key={post._id} post={post}/>)

    return(
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-screen w-full mt-1">
            <div className="md:col-span-3 pt-2 p-2 rounded-md">
                {renderedPosts}
            </div>
            <div className="border-2 border-purple-400 pt-2 p-2 rounded-md">

            </div>
        </div>
    )
}