import React from "react";
import Card from "../Card/Card";
import "./Features.css"
const Feaures = () => {
  return (
    <div className="features">
        <h2>New Arrivals</h2>
      <div className="inner">
        <Card />
        <Card />
        <Card />
        <Card /> 
      </div>
    </div>
  );
};

export default Feaures;
