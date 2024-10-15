import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import CheckoutModal from "../CheckoutModal/CheckoutModal";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    itemPrices,
    itemImages,
    addToCart,
    clearCart,
    itemNames, // Make sure to import itemNames from your context
  } = useContext(StoreContext);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const getTotalPrice = () => {
    return Object.keys(cartItems).reduce((total, id) => {
      const itemPrice = itemPrices[id] || 0;
      const quantity = cartItems[id];
      return total + itemPrice * quantity;
    }, 0);
  };

  const totalPrice = getTotalPrice();

  return (
    <div className="cart-container p-6 lg:p-12">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(cartItems).map((id) => (
              <div
                key={id}
                className="cart-item card bg-white p-4 shadow-lg rounded-lg flex flex-col items-center"
              >
                {/* Item Image */}
                <img
                  src={itemImages[id]}
                  alt={itemNames[id]} // Use item name for alt text
                  className="w-full h-32 object-cover rounded mb-4"
                />

                {/* Item Details */}
                <div className="text-center">
                  <span className="font-semibold block">{`${itemNames[id]} (ID: ${id})`}</span>
                  <span className="text-green-600 text-lg block">{`Price: $${(
                    itemPrices[id] * cartItems[id]
                  ).toFixed(2)}`}</span>

                  {/* Quantity Controls */}
                  <div className="flex justify-center space-x-2 mt-2">
                    <button
                      onClick={() => removeFromCart(id)}
                      className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="font-semibold">{cartItems[id]}</span>
                    <button
                      onClick={() => addToCart(id)}
                      className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center lg:flex-col lg:justify-center mt-6 gap-7">
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
          />
        </>
      )}

      <div className="total-price mt-8 text-center">
        <h3 className="text-2xl font-semibold">
          Total Amount: ${totalPrice.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
