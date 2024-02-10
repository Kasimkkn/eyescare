import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import Blogs from "./pages/Blogs.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Footer from "./component/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<Products />}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
