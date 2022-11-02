import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import "./App.css";
import SignUp from "./pages/Signup";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>login page</h1>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<h1>profile page</h1>} />
        <Route path="/favorites" element={<h1>favorites page</h1>} />
        <Route path="/myOrders" element={<h1>my orders page</h1>} />
        <Route path="/shoppingCart" element={<h1>shopping cart page</h1>} />
        <Route path="/aboutUs" element={<h1>about us page</h1>} />
      </Routes>
    </>
  );
};

export default App;
