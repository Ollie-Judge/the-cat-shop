import React from "react";
import "../styling/Navbar.css";
import { motion } from "framer-motion";

const Navbar = ({ setShow, size }) => {
  return (
    <div className="navbarContainer">
      <div className="titleContainer">
        <motion.h2 
        className="title"
        animate={{
          scale: [1, 2.4, 2.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0]
        }}
        transition={{
          duration: 2
        }}
        >Cats 4 Life</motion.h2>
      </div>

      <nav>
        <div className="shoppingContainer">
          <span className="keepShopping" onClick={() => setShow(true)}>
            Keep Shopping
            </span>
            <br />

          <div className="Basket" onClick={() => setShow(false)}>
            <span>
              <i class="fas fa-shopping-basket"></i>
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
