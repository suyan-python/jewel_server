import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import CheckoutModal from "../CheckoutModal/CheckoutModal";
import { Link } from "react-router-dom";
import "./Cart.css"; // Import the CSS file for styles

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    itemPrices,
    itemImages,
    addToCart,
    clearCart,
    itemNames,
  } = useContext(StoreContext);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false); // State for cart visibility

  const getTotalPrice = () => {
    return Object.keys(cartItems).reduce((total, id) => {
      const itemPrice = itemPrices[id] || 0;
      const quantity = cartItems[id];
      return total + itemPrice * quantity;
    }, 0);
  };

  const totalPrice = getTotalPrice();

  // Prepare items for the receipt
  const itemsForReceipt = Object.keys(cartItems).map((id) => ({
    id,
    name: itemNames[id],
    price: itemPrices[id],
    totalPrice: (itemPrices[id] * cartItems[id]).toFixed(2),
    quantity: cartItems[id],
  }));

  return (
    <div>
      {/* Button to toggle cart visibility */}
      <button
        onClick={() => setIsCartVisible(!isCartVisible)}
        className="toggle-cart-btn"
      >
        {isCartVisible ? "Hide Cart" : "Show Cart"}
      </button>

      {/* Cart Container with sliding effect */}
      <div
        className={`cart-container ${isCartVisible ? "slide-in" : "slide-out"}`}
      >
        <h2 className="text-3xl font-bold text-center mt-36">Your Cart</h2>
        {Object.keys(cartItems).length === 0 ? (
          <p className="text-red-600 text-lg text-center">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 my-">
              {Object.keys(cartItems).map((id) => (
                <div
                  key={id}
                  className="cart-item card bg-gray-100 p-4 shadow-md rounded-lg flex flex-col items-center"
                >
                  {/* Item Image */}
                  <img
                    src={itemImages[id]}
                    alt={itemNames[id]}
                    className="w-full h-auto object-cover rounded mb-4" // Updated class
                  />

                  {/* Item Details */}
                  <div className="text-center">
                    <span className="block text-xs">{`${itemNames[id]} `}</span>
                    <span className="text-red-600 font-medium text-xs block">{`Price: $${(
                      itemPrices[id] * cartItems[id]
                    ).toFixed(2)}`}</span>

                    {/* Quantity Controls */}
                    <div className="flex justify-center space-x-2 mt-2">
                      <button
                        onClick={() => removeFromCart(id)}
                        className="px-1 py-1 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                      >
                        -
                      </button>
                      <span className="font-semibold">{cartItems[id]}</span>
                      <button
                        onClick={() => addToCart(id)}
                        className="px-1 py-1 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center lg:flex-col lg:justify-center mt-6 gap-2">
              <button
                onClick={clearCart}
                className="w-full lg:w-auto bg-red-500 text-white py-2 px-4 rounded-lg mb-4 lg:mb-0 hover:bg-red-600 transition"
              >
                Clear Cart
              </button>

              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full lg:w-auto bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
              >
                Proceed to Checkout
              </button>
            </div>

            {/* Checkout Modal */}
            <CheckoutModal
              isOpen={isCheckoutOpen}
              onRequestClose={() => setIsCheckoutOpen(false)}
              totalPrice={totalPrice}
              items={itemsForReceipt} // Pass items for receipt to CheckoutModal
            />
          </>
        )}

        <div className="total-price mt-8 text-center">
          <h3 className="text-2xl font-semibold">
            Total Amount: ${totalPrice.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
