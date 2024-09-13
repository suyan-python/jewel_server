import React, { useState } from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code"; // Import QRCode

function AddCart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [checkoutOption, setCheckoutOption] = useState(""); // Track the selected checkout option

  const items = [
    { name: "Americano Double", price: 200 },
    { name: "Espresso", price: 120 },
    { name: "Cappuccino", price: 200 },
    { name: "Latte", price: 200 },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setTotal(total + item.price);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setCheckoutOption(""); // Reset checkout option when clearing the cart
  };

  // Example payment link (replace with your actual payment URL)
  const paymentUrl = "https://www.example.com/payments";

  return (
    <div className="mx-8 my-10 px-5 py-3 bg-gradient-to-r from-red-600 to-red-400 rounded-3xl shadow-md">
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

      {/* Checkout Section */}
      <div className="mt-10">
        <h2 className="text-white text-lg mb-4">Checkout</h2>
        <div className="flex flex-col items-center gap-4">
          <button
            className={`px-4 py-2 rounded-md shadow-md ${
              checkoutOption === "qr"
                ? "bg-yellow-500 text-white"
                : "bg-white text-red-600"
            }`}
            onClick={() => setCheckoutOption("qr")}
          >
            Pay via QR Code
          </button>
          <button
            className={`px-4 py-2 rounded-md shadow-md ${
              checkoutOption === "book"
                ? "bg-yellow-500 text-white"
                : "bg-white text-red-600"
            }`}
            onClick={() => setCheckoutOption("book")}
          >
            Advance Booking
          </button>
        </div>

        {checkoutOption === "qr" && (
          <div className="mt-6 text-center flex flex-col items-center">
            <p className="text-white mb-4">
              Scan the QR code to make a payment:
            </p>
            <QRCode value={paymentUrl} size={128} />
          </div>
        )}

        {checkoutOption === "book" && (
          <div className="mt-6 text-center">
            <p className="text-white">Book your table and pay at the cafe:</p>
            <form className="flex flex-col items-center gap-4 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-3 py-2 rounded-md border border-gray-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-3 py-2 rounded-md border border-gray-300"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="px-3 py-2 rounded-md border border-gray-300"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-white rounded shadow-md mt-4"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddCart;
