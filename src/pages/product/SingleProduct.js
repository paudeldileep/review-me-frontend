import React, { useEffect } from 'react';
import { useAPI } from '../../utils/fetchHelper';
import ProductTile from '../../components/Product/ProductTile'
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/userSlice';
import IconButton from '../../components/Product/IconButton';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { Redirect } from 'react-router-dom';

const SingleProduct=({match,history})=>{

    const user=useSelector(selectUserData);
    const isAuthenticated=useSelector(state=>state.user.isAuthenticated)

    const{productId}=match.params
    const[response,setResponse]=useAPI(`/product/details/${productId}`)

    useEffect(()=>{
        setResponse()
    },[productId])

    const post=response.data;

    const IconStyle="h-8 w-8 text-purple-500"

    const handleEditButtonClick=()=>{
        
        history.push(`/product/edit/${productId}`)
        //return <Redirect to={`/product/edit/${productId}`} />
    }

    return(<div className="mt-6 max-w-screen-md mx-auto">
        {post && <ProductTile post={post}/>}
        {user && isAuthenticated && <div className="flex justify-between mx-6">
                <IconButton Icon={PencilAltIcon} IconStyle={IconStyle} buttonText="Edit" onButtonClick={handleEditButtonClick}/>
                <IconButton Icon={TrashIcon} IconStyle="h-8 w-8 text-red-500" buttonText="Delete"/>
            </div>}
    </div>)
}


export default SingleProduct;