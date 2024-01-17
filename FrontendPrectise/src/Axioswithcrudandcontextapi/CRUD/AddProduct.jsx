import React, { useContext, useState } from 'react';
import { Authcontent } from '../ContextApi/ContextProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function AddProduct() {
  const Navigate = useNavigate();
  const { data, setData } = useContext(Authcontent);

  const [formData, setFormData] = useState({
    id: 0,
    imagelink: "",
    price: 0,
    stockavilable: false,
    comingsoon: false,
    category: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/mandeep', formData);
      // setData(res.data);
      console.log(data);

      Navigate('/');
    } catch (error) {
      console.error('Error while making the POST request:', error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image Link:</label>
          <input
            type="text"
            name="imagelink"
            value={formData.imagelink}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Stock Available:</label>
          <input
            type="checkbox"
            name="stockavilable"
            checked={formData.stockavilable}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Coming Soon:</label>
          <input
            type="checkbox"
            name="comingsoon"
            checked={formData.comingsoon}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
