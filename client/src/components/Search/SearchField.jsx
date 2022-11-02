import React from "react";
import Input from "../Input";
import "./search.css";

const SearchField = () => {
  return (
    <>
      <div className=" col-md-6 col-lg-6 col-11 mx-auto my-auto search-box">
        <div className="input-group from-container">
          <Input
            name={"Search"}
            value={"Find meal"}
            type={"text"}
            onChange={(e) => e.target.value}
            className="form-control search-input"
          />
          <span className="input-group-btn">
            <button className="btn btn-search" type="button">
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
export default SearchField;
