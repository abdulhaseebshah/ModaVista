import React from "react";
import Card from "../Card/Card";
import "./Features.css";
import { allProdcuts } from "../../assets/allProduct";
import { useNavigate } from "react-router-dom";
console.log(allProdcuts);
const Feaures = () => {
  const navigate = useNavigate();

  const navigateToProductDetails = (productId) => {
    navigate(`/ProductDetails/${productId}`);
  };

  return (
    <div className="features">
      <h2>New Arrivals</h2>
      <div className="inner">
        {allProdcuts.map((item) => (
          <Card
            mainThumb={item.mainThumb}
            backThumb={item.backThumb}
            productName={item.name}
            price={item.price}
            handleNavigate={() => navigateToProductDetails(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Feaures;
