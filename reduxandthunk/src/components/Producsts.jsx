import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getsuccess } from '../redux/action'; // Import the action correctly
import { GET_SUCCESS } from '../redux/actiontype';

function Producsts() {
  const  data  = useSelector((state) => state.data);
  const sortOrder = useSelector((state) => state.sortOrder);
  console.log(sortOrder)
  console.log(data);
  const dispatch = useDispatch();

const handlechange = (e) => {
    const newSortOrder = e.target.value;
    dispatch(getsuccess(newSortOrder));
  }

  useEffect(() => {
   dispatch( getsuccess(sortOrder))
  }, [sortOrder]); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div>
      <h1>Products</h1>
      <select onChange={handlechange}>
        <option value="">Default</option>
        <option value="asc"> Assending</option>
        <option value="desc"> Decending</option>
      </select>
      {data.map((product,i) => (
        <div key={i}> {/* Add a unique key for each element in a list */}
          <h1>{product.title}</h1>
          <h1>{product.age}</h1>

        </div>
      ))}
    </div>
  );
}

export default Producsts;
