import React, { useLayoutEffect, useRef, useState } from "react";
import "./Card.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Card = ({ mainThumb, backThumb, productName, price,handleNavigate }) => {
  const [isShow, setIsShow] = useState(true);
  const mainImg = useRef()
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from(mainImg.current, {
        scale: 1.2,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      className="productCard"
      onMouseEnter={() => setIsShow(false)}
      onMouseLeave={() => setIsShow(true)}
      onClick={handleNavigate}
    >
      <div className="imgBx">
        <img src={mainThumb} ref={mainImg} alt="" />
        <img src={backThumb} alt="" className={isShow ? "hidden" : ""} />
      </div>
      <span className="title">{productName}</span>
      <span className="price">${price}</span>
    </div>
  );
};

export default Card;
