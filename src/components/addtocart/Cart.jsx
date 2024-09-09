import React, { useState } from "react";
import { Element } from "react-scroll"; // Importing react-scroll
import { Link } from "react-router-dom"; // Importing react-router-dom for navigation

function AddCart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const items = [
    { name: "Americano", price: 200 },
    { name: "Espresso", price: 150 },
    { name: "Cappuccino", price: 250 },
    { name: "Latte", price: 300 },
  ];

  // Function to add item to cart, increasing quantity if it already exists
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      // If the item already exists, increase its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If it's a new item, add it to the cart with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setTotal(total + item.price);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]); // Clear the cart
    setTotal(0); // Reset the total
  };

  return (
    <div className="mx-8 my-10 px-5 py-3 bg-red-600 rounded-md shadow-md">
      <Element name="menu" spy={true}>
        <div className="text-center mt-4">
          <h2 className="text-3xl font-medium text-white">Our Special</h2>
        </div>

        <div className="mt-6">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-white">
                  {item.name} - Rs. {item.price}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="ml-4 px-3 py-1 bg-white text-red-600 rounded shadow"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Element>

      <div className="mt-8">
        <h2 className="text-white text-lg">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-white">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2 mt-4">
            {cart.map((item, index) => (
              <li key={index} className="text-white">
                {item.name} - Rs. {item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>

      <h3 className="text-white mt-6">Total: Rs. {total}</h3>

      {/* Clear Cart Button */}
      <div className="mt-6">
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-white text-red-600 rounded shadow"
          >
            Clear Cart
          </button>
        )}
      </div>

      <div className="redirect text-center mt-6">
        <Link to="/menu">
          <button className="px-4 py-2 bg-white text-red-600 rounded shadow">
            Other Menu
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddCart;
