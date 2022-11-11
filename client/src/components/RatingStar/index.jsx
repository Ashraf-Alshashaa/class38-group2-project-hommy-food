import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";

const RateStar = () => {
  const [currentValue, setCurrentValue] = useState();
  const [hoverValue, setHoverValue] = useState(undefined);
  const [msg, setMsg] = useState("");
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const url = `${process.env.BASE_SERVER_URL}/api/rate`;

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            rate: currentValue,
            chefId: id,
          }),
        });
        if (response.ok) {
          await response.json();
          // console.log(res, "aaaaaaa");
          return;
        }
        throw new Error("Http Error");
      } catch (error) {
        setMsg("something went wrong");
      }
    })();
  }, [currentValue]);

  const stars = Array(5).fill(0);
  return (
    <>
      {(user?.isChef && user?._id === id) || user?._id === undefined ? (
        <></>
      ) : (
        <div className="star-container">
          <h3>Rate the chef</h3>
          <div className="star">
            {stars.map((_, index) => (
              <i
                key={index}
                className={`fa-solid fa-star ${
                  (hoverValue || currentValue) > index
                    ? "mouse-in"
                    : "mouse-out"
                }`}
                onClick={() => handleClick(index + 1)}
                onMouseEnter={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
            <span>{msg}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default RateStar;
