import { useState } from "react";
import axios from "./axios";

export function usePostAPI(url,formData) {
  const [response, setResponse] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  const postData = async () => {
      if(!url || !formData){
        return
      }
    setResponse({
      ...response,
      isLoading: true,
    });
   
      axios.post(url,formData).then((res) => {
        //console.log("res", res);
        setResponse({
          ...response,
          isLoading: false,
          data: res.data,
        });
      }).catch(err=>{
    
      console.log("err"+err);
      setResponse({ ...response, isLoading: false, error: err.response });
    })
    
  };

  return [response, postData];
}
