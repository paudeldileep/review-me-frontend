import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem=(props)=>{
    return <span className="cursor-pointer p-1 font-mono font-bold text-purple-600 mx-2 border-b-4 hover:border-purple-600">
        <NavLink to={props.path}>{props.title}</NavLink>
    </span>
}

export default NavItem;