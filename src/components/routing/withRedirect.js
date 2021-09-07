import React from 'react';

import { Redirect } from 'react-router';



const WithRedirect=(Component)=>{

    //const isAuthenticated=useSelector(state=>state.user.isAuthenticated);
    return function withRedirection({isAuthenticated,...props}){
        console.log(isAuthenticated)
        if(!isAuthenticated){
            return <Component {...props}/>
        }

        return <Redirect to="/"/>

    }
}

export default WithRedirect;