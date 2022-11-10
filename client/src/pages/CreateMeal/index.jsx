import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import InputForm from "../../components/InputForm";
import UploadImgWidget from "../../components/UploadImgWidget";
import { AuthContext } from "../../contexts/authentication";
import useFetch from "../../hooks/useFetch";
import "./style.css";

export default function CreateMeal() {
  const { user } = useContext(AuthContext);
  const [imgUrl, setImgUrl] = useState(
    "https://res.cloudinary.com/dmykyluyo/image/upload/v1666906324/cld-sample-4.jpg"
  );
  const [data, setData] = useState({
    title: "",
    ingredients: [],
    image: "",
    category: "",
    cuisine: "",
    price: "",
    isAvailable: false,
    quantity: "",
  });
  const [categories, setCategories] = useState([]);
  const [cuisines, setCuisines] = useState(null);
  const navigate = useNavigate();
  const { performFetch: performFetchCuisines } = useFetch(
    "/cuisines",
    setCuisines
  );
  const { performFetch: performFetchCategories } = useFetch(
    "/categories",
    setCategories
  );
  useEffect(() => {
    performFetchCuisines();
    performFetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = user?._id;
    navigate(`/${id}/my_meals`);
    //console.log({ ...data, chefId: user?._id });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value, image: imgUrl });
  };
  useEffect(() => {
    setData({ ...data, isAvailable: data.isAvailable });
  }, [data.isAvailable]);

  return (
    <div className="create-meal-page">
      <h1>Create Your Meal</h1>
      <div className="create-meal-container">
        <div className="upload-img-section">
          <div className="img-container">
            <img src={imgUrl} alt="meal image" />
          </div>
          <UploadImgWidget setImgUrl={setImgUrl} folderName="meal_photos" />
        </div>
        <div className="meal-information-section">
          <InputForm
            className="meal-input"
            label="Title"
            type="text"
            placeholder="Title of the meal"
            errorMessage="Please enter minimum 3 character"
            name="title"
            value={data["title"]}
            onChange={handleChange}
          />
          <InputForm
            className="meal-input"
            label="Price"
            type="number"
            placeholder="Price of the meal"
            errorMessage="Please enter minimum 3 character"
            name="price"
            value={data["price"]}
            onChange={handleChange}
          />
          <label>Category</label>
          <Dropdown
            data={categories?.result}
            displayText={data.category ? data.category : "Select a category"}
            onClick={(e) => setData({ ...data, category: e.target.id })}
          />
          <label>Cuisine</label>
          <Dropdown
            data={cuisines?.result}
            displayText={data.cuisine ? data.cuisine : "Select a cuisine"}
            onClick={(e) => setData({ ...data, cuisine: e.target.id })}
          />
          {/* <input
            id="isAvailable"
            type="checkbox"
            value={true}
            name="isAvailable"
            onChange={handleChange}
          />
          <label htmlFor="isAvailable">Meal is available for today.</label> */}
          <label htmlFor="isAvailable">Meal is available for today?</label>
          <input
            className="toggle"
            type="checkbox"
            id="isAvailable"
            name="isAvailable"
            onChange={handleChange}
          />

          <label className="toggle-label" htmlFor="isAvailable"></label>

          <InputForm
            className="meal-input"
            label="Quantity"
            type="number"
            placeholder="Available quantity of portions for today"
            errorMessage="Please enter minimum 3 character"
            name="quantity"
            value={data["quantity"]}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="buttons-container">
        <Link className="link-btn" to="/">
          <button className="back-btn">Cancel</button>
        </Link>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
