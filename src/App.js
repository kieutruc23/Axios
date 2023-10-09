
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Đảm bảo bạn import Routes và Route

import AddProduct from './Component/AddProduct';
import EditProduct from './Component/EditProduct';
import ListProduct from './Component/ListProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

