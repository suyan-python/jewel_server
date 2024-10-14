import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      {!cartItems[id] ? (
        <button onClick={() => addToCart(id)}>Add to Cart</button>
      ) : (
        <div>
          <button onClick={() => removeFromCart(id)}>Remove</button>
          <span>Quantity: {cartItems[id]}</span>
        </div>
      )}
    </div>
  );
};

export default FoodItem;
