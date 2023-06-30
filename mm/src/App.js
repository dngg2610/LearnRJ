import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import { useState } from 'react';


function App() {
  const [ products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm A', description: 'Mô tả sản phẩm A', price: "100.000", image: '/images/mubh.jpg' },
    { id: 2, name: 'Sản phẩm B', description: 'Mô tả sản phẩm B', price: "200.000", image: '/images/nikegiay.jpg' },
    { id: 3, name: 'Sản phẩm C', description: 'Mô tả sản phẩm C', price: "300.000", image: '/images/giayadidas.jpg' },
  ])
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Trang chủ</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/admin" className="nav-link">Trang admin</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage products={products} setProducts={setProducts} />} />
            <Route path="/admin" element={<AdminPage products={products} setProducts={setProducts} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;