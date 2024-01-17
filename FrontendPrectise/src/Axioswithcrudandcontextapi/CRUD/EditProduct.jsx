import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

function EditProduct() {
  const { id } = useParams();
const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: 0,
    imagelink: "",
    price: 0,
    stockavilable: false,
    comingsoon: false,
    category: "",
  });

  
  useEffect(() => {
    // Fetch the product data based on the ID
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/mandeep/${id}`);
        setFormData(response.data); // Set the form data with the fetched data
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/mandeep/${id}`, formData);
      // Handle the response as needed, e.g., update state or navigate to a different page
      console.log(response.data);
      // You can add code to navigate back to the product list or product details page
      Navigate('/')
    } catch (error) {
      console.error('Error while making the PUT request:', error);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleEdit}>
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
        <button type="submit">Edit Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
