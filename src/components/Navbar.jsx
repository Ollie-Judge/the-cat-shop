import React from "react";
import "../styling/Navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <div className="navbarContainer">
      <div className="titleContainer">
        <h2 className="title">Cats 4 Life</h2>
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
