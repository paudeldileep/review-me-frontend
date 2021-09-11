import { RefreshIcon } from '@heroicons/react/outline';
import React from 'react';

const InlineLoader=(props)=>{
    return <span className={props.customStyle}>
        {props.textContent && <span className={`font-mono ${props.customTextStyle}`}>{props.textContent}</span>}<RefreshIcon className="h-5 w-5 text-purple-50 animate-spin" />
    </span>
}

export default InlineLoader