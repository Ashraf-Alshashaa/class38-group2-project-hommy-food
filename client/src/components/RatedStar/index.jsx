import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";

const RatedStar = () => {
  const [rate, setRate] = useState(0);
  const { id } = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const url = `${process.env.BASE_SERVER_URL}/api/rate:${id}`;
    (async () => {
      try {
        const response = await fetch(url);
        await response.json();
        // const result = await response.json();
        // console.log(result);
        setRate(5);
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
          <i key={index} className={`fa-solid fa-star ${rate}`} />
        ))}
        <span>{msg}</span>
      </div>
    </div>
  );
};

export default RatedStar;
