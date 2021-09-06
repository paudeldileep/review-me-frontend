
import axios from './axios'
import { useEffect, useState } from 'react'

const useFetchRequest=(url)=>{

    const[isLoading,setIsLoading]=useState(false)
    const[data,setData]=useState(null)
    const[error,setError]=useState(null)

    useEffect(()=>{

        const fetchData=async()=>{
            try{
                setIsLoading(true)
                const response=await axios.get(url);
                setData(response.data)
            }
            catch(err){
                setError(err)
            }finally{
                setIsLoading(false)
            }

        }

        fetchData()
    },[url])

    return [isLoading,data,error]

}

export default useFetchRequest