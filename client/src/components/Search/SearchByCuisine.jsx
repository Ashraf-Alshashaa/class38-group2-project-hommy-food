import React, { useState } from "react";
import PropTypes from "prop-types";
import "./search.css";
import useWindowSize from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";

const SearchByCuisine = () => {
  const [open, setOpen] = useState(false);
  let cuisines = [
    { href: "/cuisine/Indian", name: "Indian" },
    { href: "/cuisine/Chinese", name: "Chinese" },
    { href: "/cuisine/Italian", name: "Italian" },
    { href: "/cuisine/Spanish", name: "Spanish" },
    { href: "/cuisine/Turkish", name: "Turkish" },
    { href: "/cuisine/Greek", name: "Greek" },
    { href: "/cuisine/American", name: "American" },
    { href: "/cuisine/MiddleEastern", name: "Middle Eastern" },
    { href: "/cuisine/Thai", name: "Thai" },
    { href: "/cuisine/French", name: "French" },
    { href: "/cuisine/Malaysian", name: "Malaysian" },
    { href: "/cuisine/African", name: "Korean" },
  ];
  const cuisineButton = cuisines.slice(0, 7);
  const dropDownCuisine = cuisines.slice(7, 12);
  const size = useWindowSize();
  return (
    <>
      <div className="cuisine-buttons-container ">
        <div className="cuisine">
          {cuisineButton.map(({ href, name }) => (
            <Link
              to={href}
              key={name}
              className={!open ? "active" : "inactive"}
            >
              <button className="btn btn-primary col-md-1.5">{name}</button>
            </Link>
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
              {dropDownCuisine.map(({ href, name }) => (
                <Link to={href} key={name}>
                  <DropdownItem text={name} />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {size.width < 600 && (
        <div className="menu-containerMobile row">
          <div className="menu-triggerMobile d-grid gap-2">
            <button
              onClick={() => {
                setOpen(!open);
              }}
              type="button"
              className="btn btn-primary "
            >
              Cuisines
              <i className="fa fa-caret-down" />
            </button>
          </div>
          <div className={`menuMobile ${open ? "active" : "inactive"}`}>
            <ul>
              {cuisines.map(({ href, name }) => (
                <Link to={href} key={name}>
                  <DropdownItem text={name} />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
const DropdownItem = (props) => {
  return <li className="dropdownItem">{props.text}</li>;
};
DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
};
export default SearchByCuisine;
