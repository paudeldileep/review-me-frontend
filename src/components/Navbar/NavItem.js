import React from 'react';
import { Link } from 'react-router-dom';

const NavItem=(props)=>{
    return <span className="cursor-pointer p-1 font-mono font-bold text-purple-600 mx-2 border-b-4 hover:border-purple-600">
        <Link to={props.path}>{props.title}</Link>
    </span>
}

export default NavItem;