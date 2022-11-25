import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import useWindowSize from "../../hooks/useWindowSize";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const CuisineListButtons = () => {
  const [open, setOpen] = useState(false);
  const [cuisines, setCuisines] = useState(null);
  const navigate = useNavigate();
  const { performFetch } = useFetch("/cuisines", setCuisines);

  useEffect(() => {
    performFetch();
  }, []);

  useEffect(() => {
    const closeDropDownCuisine = () => open && setOpen(false);

    window.addEventListener("click", closeDropDownCuisine);

    return () => {
      window.removeEventListener("click", closeDropDownCuisine);
    };
  }, [open]);
  const cuisineButton = cuisines?.result.slice(0, 7);
  const dropDownCuisine = cuisines?.result.slice(7);
  const size = useWindowSize();
  return (
    <>
      <div className="cuisine-buttons-container">
        <div className="cuisine">
          {cuisineButton?.map((cuisine) => (
            <button
              className="btn btn-primary cuisine-buttons"
              key={cuisine._id}
              onClick={() => {
                navigate(`/results?cuisine=${cuisine?._id}`);
              }}
            >
              {cuisine?.title}
            </button>
          ))}
        </div>
        <div className="menu-container">
          <div className="menu-trigger">
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="btn btn-primary d-flex justify-content-evenly align-items-center other-cuisine-btn m-0"
            >
              Other Cuisines <i className="fa fa-caret-down dropdown-icon" />
            </button>
          </div>
          <div
            className={`menu ${
              open ? "categories-active" : "categories-inactive"
            }`}
          >
            <ul>
              {dropDownCuisine?.map((cuisine) => (
                <li
                  className="drop-down-menu"
                  key={cuisine._id}
                  onClick={() => {
                    navigate(`/results?cuisine=${cuisine?._id}`);
                  }}
                >
                  {cuisine?.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {size.width < 600 && (
        <div className="menu-containerMobile">
          <div className="menu-triggerMobile d-grid ">
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
          <div
            className={`menuMobile ${
              open ? "categories-active" : "categories-inactive"
            }`}
          >
            <ul>
              {cuisines?.result.map((cuisine) => (
                <li
                  className="btn btn-primary "
                  key={cuisine._id}
                  onClick={() => {
                    navigate(`/results?cuisine=${cuisine?._id}`);
                  }}
                >
                  {cuisine?.title}
                </li>
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
export default CuisineListButtons;
