import React, { useState } from "react";
import "./searchfield.css";
import useWindowSize from "../../hooks/useWindowSize";

const SearchByCuisine = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const size = useWindowSize();
  return (
    <div className="cuisine">
      <button className="btn btn-primary"> Indian</button>
      <button className="btn btn-primary"> Chinese</button>
      <button className="btn btn-primary"> Italian</button>
      <button className="btn btn-primary"> Spanish</button>
      <button className="btn btn-primary"> Turkish</button>
      <button className="btn btn-primary"> Greek</button>
      <button className="btn btn-primary"> American</button>
      <button className="btn btn-primary">African</button>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          onClick={handleOpen}
        >
          other Cuisine
        </button>
        {open ? (
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        ) : null}

        {size.width < 600 && (
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={handleOpen}
            >
              cuisine
            </button>
            {open ? (
              <ul className="menu">
                <li className="menu-item">indian</li>
                <li className="menu-item">pakistani</li>
              </ul>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchByCuisine;
