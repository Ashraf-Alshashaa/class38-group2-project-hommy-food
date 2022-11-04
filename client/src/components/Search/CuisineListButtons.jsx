import React from "react";
import PropTypes from "prop-types";
import "./search.css";
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

  const cuisineButton = cuisines?.result.slice(0, 7);
  const dropDownCuisine = cuisines?.result.slice(7);
  const size = useWindowSize();
  return (
    <>
      <div className="cuisine-buttons-container">
        <div className="cuisine">
          {cuisineButton.map((cuisine) => (
            <button
              className="btn btn-primary "
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
              className="btn btn-primary"
            >
              Other Cuisines <i className="fa fa-caret-down" />
            </button>
          </div>

          <div className={`menu ${open ? "active" : "inactive"}`}>
            <ul>
              {dropDownCuisine.map((cuisine) => (
                <button
                  className="btn btn-primary "
                  key={cuisine._id}
                  onClick={() => {
                    navigate(`/results?cuisine=${cuisine?._id}`);
                  }}
                >
                  {cuisine?.title}
                </button>
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
          <div className={`menuMobile ${open ? "active" : "inactive"}`}>
            <ul>
              {cuisines?.result.map((cuisine) => (
                <button
                  className="btn btn-primary "
                  key={cuisine._id}
                  onClick={() => {
                    navigate(`/results?cuisine=${cuisine?._id}`);
                  }}
                >
                  {cuisine?.title}
                </button>
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
