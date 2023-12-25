import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetails/ProductDetail";
import Header from "./components/Header/Header";
import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetails/:id" element={<ProductDetail />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
