import { useState } from "react";
import axios from "./axios";

export function useAPI(url) {
  const [response, setResponse] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    setResponse({
      ...response,
      isLoading: true,
    });
   
      axios.get(url).then((res) => {
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

  return [response, fetchData];
}
