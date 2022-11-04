import React from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchField = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <div className=" col-md-6 col-lg-6 col-11 mx-auto my-auto search-box">
        <div className="input-group from-container">
          <input
            name={"Search"}
            placeholder="Find your meal"
            type={"text"}
            onChange={handleChange}
            className="form-control search-input"
          />
          <span className="input-group-btn">
            <button
              className="btn btn-search"
              type="button"
              onClick={() => navigate(`/results?search=${query}`)}
            >
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
export default SearchField;
