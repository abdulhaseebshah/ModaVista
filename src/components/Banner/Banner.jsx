import React, { useLayoutEffect } from "react";
import bn1 from "../../assets/img/halfBanner-1.jpg";
import bn2 from "../../assets/img/halfBanner-2.jpg";
import bn3 from "../../assets/img/fullBanner.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./Banner.css";

const Banner = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.halfBanner img', {
        scale: 1.1, 
        scrollTrigger: {
          trigger: '.bannerSection .inner',
          start: 'top center',
          end: 'center center',
          scrub: true
        }
      });
      gsap.to('.fullBanner img', {
        scale: 1.1, 
        scrollTrigger: {
          trigger: '.halfBanner',
          start: 'bottom bottom',
          markers: true,
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="bannerSection">
      <div className="inner">
        <div className="halfBanner">
          <img src={bn1} alt="" />
          <div className="txtBx">
            <h2>Hoodie</h2>
          </div>
        </div>
        <div className="halfBanner">
          <img src={bn2} alt="" />
          <div className="txtBx">
            <h2>Hoodie</h2>
          </div>
        </div>
        <div className="fullBanner">
          <img src={bn3} alt="" />
          <div className="txtBx">
            <h2>Winter Season 2023</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
