"use client"

import { useEffect, useState } from "react"


const ProductList = () => {
const[data, setData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const jsondata = await response.json();
        console.log(jsondata)
        setData(jsondata.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // Call the async function
  }, []);
  

  return (
    <div>ProductList
        {
            data.map((item)=>{
                return(
                   <div>
                    <h1>{item.title}</h1>
                   </div>
                
                )
            })
        }
    </div>
  )
}

export default ProductList