import React from "react";
import "../styling/cat-card.css";

const CatCards = ({ item, handleClick }) => {
  const { name, breed, price, img } = item;

  return (
    <div className="cat-cards">
      <div className="catPhoto">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <p>{name}</p>
        <p>{breed}</p>
        <p>£{price}</p>
        <button className="cartButton" onClick={() => handleClick(item)}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default CatCards;
