import React from 'react'
import { useSelector } from 'react-redux';
import {Redirect, Route} from 'react-router-dom'


const PublicRoute = ({component:Component,...rest}) =>{

    const isAuthenticated=useSelector(state=>state.user.isAuthenticated)

    return(
    <Route {...rest} render={props => isAuthenticated ? (<Redirect to="/" />):(<Component {...props}/>)}/>
    )
};

export default PublicRoute;