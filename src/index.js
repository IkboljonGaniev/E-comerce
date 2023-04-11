import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainCom from "./components";
import About from "./components/about";
import Contact from "./components/contact";
import Stores from "./components/stores";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Products from "./components/products";
import Home from "./components/home";
import Product from "./components/product";
import Index from "./components/productregistrations";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/past" element={<Index />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
