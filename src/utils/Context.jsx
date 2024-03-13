import axios from '../utils/axios';
import React, { createContext, useEffect, useState } from 'react'
export const userContext = createContext();
function Context(props) {
  const [products , setproducts] = useState(null);

const getProducts = async ()=>{
    try {
        const {data} = await axios.get("/products");
        setproducts(data);
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    getProducts()
},[])

  return (
    <userContext.Provider value={[products,setproducts]}>
        {props.children}
    </userContext.Provider>
  )
}

export default Context