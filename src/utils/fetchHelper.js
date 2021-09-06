import axios from './axios'

export async function fetchAllPosts(url){
    let isLoading=false
    let data=null
    let error=null

    try {
        axios.get(url).then((res) => {
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }

    return {isLoading,data,error};



}
