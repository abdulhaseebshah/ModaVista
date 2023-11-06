import React, { useState } from "react";
import "./Card.css";
import img1 from "../../assets/img/01.jpg";
import img2 from "../../assets/img/02.jpg";
const Card = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div
      className="productCard"
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div className="imgBx">
        <img src={img2} alt="" />
        <img src={img1} alt="" className={isShow ? "hidden" : ""} />
      </div>
      <span className="title">Lorem ipsum dolor sit.</span>
      <span className="price">200</span>
    </div>
  );
};

export default Card;
