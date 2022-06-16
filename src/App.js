import React from "react";
import Navbar from "./components/Navbar";

import Product from "./components/Product";
import Footer from "./components/Footer";

const App = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
  
    const handleClick = (item) => {
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
    };
  
    const handleChange = (item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;
  
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);
    };
  
     
    return (
      <React.Fragment>
        <Navbar setShow={setShow} size={cart.length} />
        {show ? (
          <Product handleClick={handleClick} />
        ) : (
          <Basket cart={cart} setCart={setCart} handleChange={handleChange} />
        )}
  
        <Footer />
      </React.Fragment>
    );
  };
  



const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </div>
      <Footer />
    </React.Fragment>
  );
};


export default App;
