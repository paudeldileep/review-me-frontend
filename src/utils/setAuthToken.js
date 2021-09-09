//set authorization token on request header of axios

import axios from './axios';

const setAuthToken = token =>{
    //console.log(token)
    if(token){
        axios.defaults.headers.common['x-auth-token'] =token;
    }
    else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
};

export default setAuthToken;