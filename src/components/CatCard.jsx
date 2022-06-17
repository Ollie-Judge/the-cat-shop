import React from "react";
import "../styling/cat-card.css";
import { motion } from "framer-motion";



const CatCards = ({ item, handleClick }) => {
  const { name, breed, price, img } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      whileHover={{
        scale: 1.2,
        textShadow: "0px 0px 8px rgb(255,255,255)",        
        originX: 0,
        textColor: '#f8e112',
        color: '#f8e112',
        type: "spring",
        damping: 25,
        stiffness: 500,        
      }}
      
    className="cat-cards">
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
    </motion.div>
    
  );
};

export default CatCards;
