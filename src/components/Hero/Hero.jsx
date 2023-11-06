import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="heroSection">
      <div className="bg">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          src="https://cdn.shopify.com/videos/c/o/v/94b7b181674946eeb253c48015783fd8.mp4"
          className="bgVideo"
        ></video>
      </div>
      <div className="txtBx">
        <span>DEBUT DELIVERY</span>
        <span className="title">Winter '23 Fashion Freeze</span>
      </div>
    </div>
  );
};

export default Hero;
