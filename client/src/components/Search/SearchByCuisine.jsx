import React, { useState } from "react";
import PropTypes from "prop-types";
import "./search.css";
import useWindowSize from "../../hooks/useWindowSize";

const SearchByCuisine = () => {
  const [open, setOpen] = useState(false);
  let cuisines = [
    "Indian",
    "Chinese",
    "Italian",
    "Spanish",
    "Turkish",
    "Greek",
    "American",
    "African",
  ];

  const size = useWindowSize();
  return (
    <>
      <div className="cuisine-buttons-container">
        <div className="cuisine">
          {cuisines.map((cuisine) => (
            <button key={cuisine} className="btn btn-primary">
              {cuisine}
            </button>
          ))}
        </div>
        <div className="menu-container">
          <div className="menu-trigger">
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
            <ul>
              <DropdownItem text={"Arabic"} />
              <DropdownItem text={"Mexican"} />
              <DropdownItem text={" Thai"} />
              <DropdownItem text={"French"} />
              <DropdownItem text={"Malaysian"} />
              <DropdownItem text={"Korean"} />
            </ul>
          </div>
        </div>
      </div>
      {size.width < 600 && (
        <div className="menu-containerMobile">
          <div className="menu-trigger">
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="btn btn-primary"
            >
              Cuisines
              <i className="fa fa-caret-down" />
            </button>
          </div>
          <div className={`menu ${open ? "active" : "inactive"}`}>
            <ul>
              {cuisines.map((cuisine) => (
                <DropdownItem key={cuisine} text={cuisine} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
const DropdownItem = (props) => {
  return (
    <li className="dropdownItem">
      <a> {props.text} </a>
    </li>
  );
};
DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
};
export default SearchByCuisine;
