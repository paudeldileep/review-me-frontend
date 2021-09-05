import React from 'react'
import { useSelector } from 'react-redux';
import {Redirect, Route} from 'react-router-dom'
import {selectUserData } from '../../redux/userSlice';

const PrivateRoute = ({component:Component,...rest}) =>{

    let isAuthorized=false;
    const userData=useSelector(selectUserData)

    if(userData) {
        isAuthorized=true;
    }
   
    console.log(userData)
    return(
    <Route {...rest} render={props => !isAuthorized ? (<Redirect to="/" />):(<Component {...props}/>)}/>
    )
};

export default PrivateRoute;