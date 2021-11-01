import React, { useEffect, useState } from 'react';

const Alert=(props)=>{

    
    const {delay,type}=props

    const[isVisible,setIsVisible]=useState(true);
    const[children,setChildren]=useState(props.children)
    
    useEffect(()=>{
        setChildren(children)
        setIsVisible(true)
        setTimer(delay);
    },[props.children])

    
    const alertStyle=type==='error'? 'text-red-600' : 'text-gray-200'

    const setTimer=(delay)=>setTimeout(() => setIsVisible(false), delay);

    return <div className={`h-10 w-full ${alertStyle} flex justify-center font-mono tracking-tighter`}>
        {isVisible && children}
    </div>
}

export default Alert