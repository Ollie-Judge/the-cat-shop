import "../styling/Basket.css";

const Basket = ({ basket, setBasket, handleChange, price }) => {


  const handleRemove = (id) => {
    const arr = basket.filter((item) => item.id !== id);
    setBasket(arr);
    ;
  };

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