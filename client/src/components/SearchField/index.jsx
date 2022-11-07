import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";

const SearchField = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      {/* <div className=" col-md-6 col-lg-6 col-11 mx-auto my-auto search-box"> */}
      <form className="search-container">
        <input
          name={"Search"}
          placeholder={"Find your meal..."}
          type={"text"}
          onChange={handleChange}
          className="search-control"
        />
        <button
          type="submit"
          id="search-btn"
          onClick={() => navigate(`/results?search=${query}`)}
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
      {/* </div> */}
    </>
  );
};
export default SearchField;
