import React, { useEffect } from 'react';
import ProductTile from '../../components/Product/ProductTile';
import { useAPI } from '../../utils/fetchHelper';

const Products=(props)=>{

    const[response,setResponse]=useAPI(`/product/all/${props.userId}`)
    let renderedProducts=null

    useEffect(()=>{
        setResponse(`/product/all/${props.userId}`)
    },[props.userId])

    console.log(response)

    if(response.data){
        renderedProducts=response.data.map(product=><ProductTile key={product._id} post={product}/>)
    }

    return <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 xl:grid-cols-3">
        {response.error ? <p>{response.error.data.errors} !</p> : <>{renderedProducts}</>}
        
    </div>
}

export default Products