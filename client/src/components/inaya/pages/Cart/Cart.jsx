import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice, itemPrices } =
    useContext(StoreContext);
  const totalPrice = getTotalPrice();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {Object.keys(cartItems).map((id) => (
            <li key={id}>
              <span>{`Item ID: ${id}`}</span>
              <span>{` Quantity: ${cartItems[id]}`}</span>
              <span>{` Price: $${(itemPrices[id] * cartItems[id]).toFixed(
                2
              )}`}</span>
              <button onClick={() => removeFromCart(id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
