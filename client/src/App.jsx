import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import ResultPage from "./pages/resultPage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/SignUp";
import CreateMeal from "./pages/CreateMeal";
import EditMeal from "./pages/EditMeal";
import MealDetailPage from "./pages/MealDetailPage";
import ProfilePage from "./pages/ProfilePage";
import MsgPopup from "./components/MsgPopUp";

const App = () => {
  return (
    <>
      <Header />
      <MsgPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/favorites" element={<h1>favorites page</h1>} />
        <Route path="/myOrders" element={<h1>my orders page</h1>} />
        <Route path="/shoppingCart" element={<h1>shopping cart page</h1>} />
        <Route path="/aboutUs" element={<h1>about us page</h1>} />
        <Route path="/mealDetail/:id" element={<MealDetailPage />} />
        <Route path="/:chefId/my_meals" element={<h1>My meals</h1>} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/create-meal" element={<CreateMeal />} />
        <Route path="/edit-meal/:id" element={<EditMeal />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
