import React from 'react';
import IconButton from './IconButton';
import { ThumbUpIcon,ChatAltIcon,HeartIcon } from '@heroicons/react/outline';

const ReactionButtons=(props)=>{

    const iconStyle="w-8 h-8 text-purple-500"
    return(<div className="flex justify-between my-2">
            <IconButton Icon={ThumbUpIcon} IconStyle={iconStyle} buttonText="Likes" />
            <IconButton Icon={ChatAltIcon} IconStyle={iconStyle} buttonText="Comments" />
            <IconButton Icon={HeartIcon} IconStyle={iconStyle} buttonText="Hearts" />
    </div>)
}

export default ReactionButtons