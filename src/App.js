import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Basket from "./components/Basket";
import Product from "./components/Product";
import Footer from "./components/Footer";

const App = () => {
    const [show, setShow] = useState(true);
    const [basket, setBasket] = useState([]);
  
    const handleClick = (item) => {
      if (basket.indexOf(item) !== -1) return;
      setBasket([...basket, item]);
    };
  
    const handleChange = (item, d) => {
      const ind = basket.indexOf(item);
      const arr = basket;
      arr[ind].amount += d;
  
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setBasket([...arr]);
    };
  
     
    return (
      <React.Fragment>
        <Navbar setShow={setShow} size={basket.length} />
        {show ? (
          <Product handleClick={handleClick} />
        ) : (
          <Basket basket={Basket} setBasket={setBasket} handleChange={handleChange} />
        )}
  
        <Footer />
      </React.Fragment>
    );
  };


export default App;
