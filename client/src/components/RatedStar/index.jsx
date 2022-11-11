import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const RatedStar = () => {
  const [rate, setRate] = useState();
  const [msg, setMsg] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const url = `${process.env.BASE_SERVER_URL}/api/rate/${id}`;
    (async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setRate(data.result);
        }
      } catch (error) {
        setMsg("something went wrong");
      }
    })();
  }, [rate]);

  const stars = Array(5).fill(0);
  return (
    <div className="star-container">
      <div className="star">
        {stars.map((_, index) => (
          <i
            key={index}
            className={`fa-solid fa-star ${
              rate > index ? "mouse-in" : "mouse-out"
            }`}
          />
        ))}
        <span>{msg}</span>
      </div>
    </div>
  );
};

export default RatedStar;
