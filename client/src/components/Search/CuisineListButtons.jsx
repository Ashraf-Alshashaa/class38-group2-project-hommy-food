import React, { useState } from "react";
import PropTypes from "prop-types";
import "./search.css";
import useWindowSize from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";

const CuisineListButtons = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  let cuisines = [
    { id: "cuisine/:id", name: "Indian" },
    { id: "Chinese", name: "Chinese" },
    { id: "Italian", name: "Italian" },
    { id: "Spanish", name: "Spanish" },
    { id: "Turkish", name: "Turkish" },
    { id: "Greek", name: "Greek" },
    { id: "American", name: "American" },
    { id: "MiddleEastern", name: "Middle Eastern" },
    { id: "Thai", name: "Thai" },
    { id: "French", name: "French" },
    { id: "Malaysian", name: "Malaysian" },
    { id: "African", name: "Korean" },
  ];

  const cuisineNavLinks = (screenWidth, isDropDownCuisine) => {
    const numOfBtn = [];
    if (screenWidth > 1024) numOfBtn.push(8);
    if (screenWidth >= 820 && screenWidth < 1024) numOfBtn.push(6);
    if (screenWidth < 820 && screenWidth > 600) numOfBtn.push(4);
    if (screenWidth < 600) numOfBtn.push(0);
    const numOfCuisines = cuisines.length;
    const dropDownItems = cuisines.slice(numOfBtn[0], numOfCuisines);
    const buttonItems = cuisines.slice(0, numOfBtn[0]);
    return isDropDownCuisine
      ? dropDownItems.map(({ id, name }) =>
          mapCuisine(isDropDownCuisine, name, id)
        )
      : buttonItems.map(({ id, name }) =>
          mapCuisine(isDropDownCuisine, name, id)
        );
  };

  const mapCuisine = (isDropDownCuisine, name, id) => {
    return (
      <Link to={`/result/${id}`} key={name} className="dropdown-item-link">
        {isDropDownCuisine ? (
          <DropdownItem text={name} />
        ) : (
          <button className="btn btn-primary m-1 ">{name}</button>
        )}
      </Link>
    );
  };

  return (
    <>
      <div className="cuisine-buttons-container d-flex justify-content-center mt-4 ">
        <div className="cuisine">{cuisineNavLinks(width, false)}</div>
        <div className="menu-container ">
          <div className="menu-trigger m-1">
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="btn btn-primary"
            >
              Other Cuisines <i className="fa fa-caret-down" />
            </button>
          </div>
          <div className={`menu ${open ? "active" : "inactive"}`}>
            <ul>{cuisineNavLinks(width, true)}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

const DropdownItem = (props) => {
  return <li className="dropdownItem">{props.text}</li>;
};
DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
};
export default CuisineListButtons;
