import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; 
const EditProduct = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [product, setProduct] = useState({
    name: '',
    des: '',
    price: 0,
    image: ''
  });
   const [error, setError] = useState(null); 
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      
      })
      .catch((error) => {
        setError('Error loading product data: ' + error.message); 
         });
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };
  const handleSave = () => {
    axios.put(`http://localhost:3000/products/${id}`, product)
      .then((response) => {
        console.log('Product updated successfully');
      })
      .catch((error) => {
        setError('Error updating product: ' + error.message); 
      });
  };
  return (
    <form onSubmit={handleSave}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="des" value={product.des} onChange={handleChange} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" name="image" value={product.image} onChange={handleChange} required />
      </div>
      <button type="submit">Edit Product</button>
    </form>
  );
};
export default EditProduct;

