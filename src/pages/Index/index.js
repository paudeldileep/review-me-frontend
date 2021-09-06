import React from 'react';
import PostsGrid from '../../components/Post/PostsGrid'

export const Index=(props)=>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-screen w-full mt-1">
            <div className="md:col-span-3 pt-2 p-2 border-2 border-purple-400 rounded-md">
                <PostsGrid category="public"/>
            </div>
            <div className="border-2 border-purple-400 pt-2 p-2 rounded-md">

            </div>
        </div>
    )
}