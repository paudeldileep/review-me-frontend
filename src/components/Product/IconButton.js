import React from 'react';

const IconButton=({Icon,IconStyle,buttonText,onButtonClick})=>{

    const handleClick=()=>{
        if(onButtonClick){
        onButtonClick()
        }
    }

    return <button className="flex justify-center items-center" onClick={handleClick}>
        <Icon className={IconStyle} />
        <span>{buttonText}</span>
    </button>
}

export default IconButton