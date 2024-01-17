import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const [product, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/mandeep/${id}`);
      console.log(res.data);
      const gg = res.data;
      setData(gg);
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchdata();
  }, [id]);
  return (
    <div>
          <h2>Product Details</h2>
      
            <img src={product.imagelink} alt={product.name} width={"100px"} />
            <p>{product.price}</p>
            <h1>{product.category}</h1>
           
            
          
       
      
    </div>
  );
}

export default ProductDetails;
