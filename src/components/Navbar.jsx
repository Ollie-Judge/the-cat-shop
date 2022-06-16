import React from "react";
import "../styling/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="titleContainer">
        <h2 className="title">Cats 4 Life</h2>
      </div>

      <nav>
        <div className="shoppingContainer">
          <span>Shop</span>

          <div className="shoppingCart">
            <span>
              <i class="fas fa-shopping-basket"></i>
            </span>
            <span>0</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
