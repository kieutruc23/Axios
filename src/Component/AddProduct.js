import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
 
    name: '',
    des: '',
    price: 0,
    image: ''
  });
  const [products, setProducts] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/products', newProduct);
 


      setProducts([...products, response.data]);
      setNewProduct({
        name: '',
        des: '',
        price: 0,
        image: ''
      });
     
    } catch (error) {
      console.error('Error adding product: ', error);
    }


  };
  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="des" value={newProduct.des} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={newProduct.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={newProduct.image} onChange={handleChange} required />
        </div>

        <button type="submit">
          Add
        </button>

      </form>
    </div>
  );
};
export default AddProduct;
