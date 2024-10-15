import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <img src={image} alt={name} className="food-item-image" />
      <h3 className="food-item-info">{name}</h3>
      <p className="food-item-desc"> {description}</p>
      <p className="food-item-price">${price}</p>
      {!cartItems[id] ? (
        <button className="hover:text-green-500" onClick={() => addToCart(id)}>
          Add to Cart
        </button>
      ) : (
        <div>
          <button
            className="hover:text-red-500"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodItem;
