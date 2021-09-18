import React, { useEffect, useState } from 'react';
import IconButton from './IconButton';
import { ThumbUpIcon,ChatAltIcon,HeartIcon, } from '@heroicons/react/solid';

import { useDispatch, useSelector } from 'react-redux';
import { postHeart, postLike } from '../../redux/productSlice';
import { useHistory } from 'react-router-dom';

const ReactionButtons=({postId,reviews,likes,hearts})=>{

    const history=useHistory()
    const dispatch=useDispatch()
    //const response=useSelector(state=>state.product.response)
    const error=useSelector(state=>state.product.error)
    const userId=useSelector(state=>state.user.userData._id)
    const isAuthenticated=useSelector(state=>state.user.isAuthenticated)
    const [isLiked,setIsLiked]=useState(false)
    const [isLoved,setIsLoved]=useState(false)
    const [likesNum,setLikesNum]=useState(likes.length)
    const [heartsNum,setHeartsNum]=useState(hearts.length)
    const [reviewsNum,setReviewsNum]=useState(reviews.length)

    console.log('userid',userId)
    console.log('isliked',isLiked)
    //check whether this user liked this post or not
    useEffect(()=>{
        
        setIsLiked(likes.includes(userId))
        
    },[likes,userId])
    //check whether this user loved this post or not
    useEffect(()=>{
        
        setIsLoved(hearts.includes(userId))
        
    },[hearts,userId])

    const handleLike=()=>{
        //dispatch like
        if(!isAuthenticated){
            return history.push('/login');
        }
        setLikesNum(isLiked ? likesNum - 1 : likesNum + 1)
        setIsLiked(!isLiked)
        dispatch (postLike(postId))
    }

    const handleHearts=()=>{
        if(!isAuthenticated){
            return history.push('/login');
        }
        setHeartsNum(isLoved ? heartsNum-1: heartsNum+1)
        setIsLoved(!isLoved)
        //dispatch heart
        dispatch(postHeart(postId))
    }

    // useEffect(()=>{
    //     const unsubscribe=()=>{
    //     if(response !==null){
    //         dispatch(clearResponse())
    //     }
    // }
    // return unsubscribe()
    // },[response])

    //console.log('response rxn',response)
    //console.log('error rxn' ,error)

    const iconStyle="w-8 h-8 text-purple-300"
    const iconStyleAlt="w-8 h-8 text-purple-600"
    return(<div className="flex justify-between my-2">
            <IconButton Icon={ThumbUpIcon} IconStyle={isLiked ? iconStyleAlt : iconStyle} buttonText={likesNum} onButtonClick={handleLike} />
            <IconButton Icon={ChatAltIcon} IconStyle={iconStyle} buttonText={reviewsNum} />
            <IconButton Icon={HeartIcon} IconStyle={isLoved ? iconStyleAlt : iconStyle} buttonText={heartsNum} onButtonClick={handleHearts} />
    </div>)
}

export default ReactionButtons