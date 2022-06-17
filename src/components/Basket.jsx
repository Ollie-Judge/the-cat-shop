import React, { useState, useEffect } from "react";
import "../styling/Basket.css";

const Basket = ({ basket, setBasket, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = basket.filter((item) => item.id !== id);
    setBasket(arr);
    handlePrice();
  };

  
  const handlePrice = () => {
    let cost = 0;
    basket.map((item) => (cost += item.amount * item.price));
    setPrice(cost);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="container">
      {basket.map((item) => (
        <div className="basketWrapper" key={item.id}>
          <div className="basketImage">
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
          </div>

          <div>
            {/*incremement ammount*/}
            <button onClick={() => handleChange(item, +1)}>+</button>
            <button>{item.amount}</button>
            {/*decrement ammount*/}
            <button onClick={() => (item <= 0 ? (item = 0) : handleChange(item, -1))}>-</button>
          </div>
          <div>
            <span>£{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="totalCost">
        <span>Total Cost £{price}.00</span>
      </div>
    </div>
  );
};

export default Basket;