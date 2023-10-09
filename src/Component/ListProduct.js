import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditProduct from './EditProduct';
const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error loading data: ', error);
      });
  }, []);
  const startEditing = (id) => {
    setEditingProductId(id)
  }
  const deleteProduct = (id) => {

    axios.delete(`http://localhost:3000/products/${id}`)
      .then((response) => {

        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error('Error deleting product: ', error);
      });
  };
  return (

    <div className="App">
      <h1>Products</h1>
      <a href="http://localhost:3001/add">ADD</a>
      <ul>
        {products.map((product, index) => (

          <div key={index}>

            <h2>{product.name}</h2>
            <p>{product.des}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name} width={100} />
            <br></br>
            <hr></hr>
            <button onClick={() => startEditing(product.id)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>

        ))}
      </ul>
      {editingProductId && <EditProduct productId={editingProductId} products={products} />}
    </div>

  );
}

export default ListProduct