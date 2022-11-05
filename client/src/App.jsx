import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<h1>profile page</h1>} />
        <Route path="/favorites" element={<h1>favorites page</h1>} />
        <Route path="/myOrders" element={<h1>my orders page</h1>} />
        <Route path="/shoppingCart" element={<h1>shopping cart page</h1>} />
        <Route path="/aboutUs" element={<h1>about us page</h1>} />
        <Route path="/register" element={<h1>register page</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
