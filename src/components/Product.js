import React, { useState } from "react";
import Cats from "../components/Cats";
import CatCards from "../components/CatCard";
import "../styling/Product.css";

const Product = ({ handleClick }) => {
  return (
    <section>
      {Cats.map((item) => (
        <CatCards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Product;
