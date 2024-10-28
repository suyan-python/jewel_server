import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import CheckoutModal from "../CheckoutModal/CheckoutModal";
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
        className="toggle-cart-btn z-20"
      >
        {isCartVisible ? "Hide Cart" : "Show Cart"}
      </button>

      {/* Cart Container with sliding effect */}
      <div
        className={`cart-container z-10 ${
          isCartVisible ? "slide-in" : "slide-out"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mt-8">Your Cart</h2>

        {Object.keys(cartItems).length === 0 ? (
          <p className="text-red-600 text-lg text-center mt-4">
            Your cart is empty.
          </p>
        ) : (
          <>
            {/* Make this section scrollable */}
            <div className="cart-items-container overflow-y-auto">
              {Object.keys(cartItems).map((id) => (
                <div
                  key={id}
                  className="cart-item card bg-gray-100 p-4 shadow-md rounded-lg flex flex-col items-center mb-4"
                >
                  {/* Item Image */}
                  <img
                    src={itemImages[id]}
                    alt={itemNames[id]}
                    className="w-full h-auto object-cover rounded mb-4"
                  />

                  {/* Item Details */}
                  <div className="text-center">
                    <span className="block text-xs">{itemNames[id]}</span>
                    <span className="text-red-600 font-medium text-xs block">{`Price: Rs.${(
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

            <div className="flex flex-col items-center mt-6 gap-2">
              <button
                onClick={clearCart}
                className=" bg-red-500 text-white py-2 px-4 rounded-lg mb-4 hover:bg-red-600 transition"
              >
                Clear Cart
              </button>

              <button
                onClick={() => setIsCheckoutOpen(true)}
                className=" bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
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

        {/* Fixed Total Price div at the bottom */}
        <div className="total-price fixed-bottom mt-8 text-center bg-white py-4">
          <h3 className="text-2xl font-semibold">
            Total Amount: Rs.{totalPrice.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
