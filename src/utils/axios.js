import axios from 'axios'

const instance=axios.create({
    baseURL:'http://localhost:4000/api/', //for local host
    //baseURL:'https://reviewmebackend.herokuapp.com/api/' //for live
    
});

export default instance;