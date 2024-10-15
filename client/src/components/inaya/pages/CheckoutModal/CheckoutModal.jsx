import React, { useState } from "react";
import Modal from "react-modal"; // Assuming you're using react-modal

Modal.setAppElement("#root"); // Required for accessibility

const CheckoutModal = ({ isOpen, onRequestClose, totalPrice }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [hasPromoCode, setHasPromoCode] = useState(false); // Radio state
  const [discount, setDiscount] = useState(0);

  // Handle form submit logic
  const handleSubmit = (e) => {
    e.preventDefault();
    // Proceed to payment logic here
    console.log("Proceeding to payment with details:", {
      name,
      email,
      phone,
      promoCode,
      discount,
    });
  };

  // Function to apply discount based on promo code
  const applyPromoCode = (code) => {
    if (code === "VUDEVI@2014") {
      setDiscount(0.4); // 40% discount
    } else if (code === "FROMWEBSITE") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0); // No discount
    }
  };

  // Function to handle promo code changes
  const handlePromoCodeChange = (e) => {
    const enteredCode = e.target.value;
    setPromoCode(enteredCode);
    applyPromoCode(enteredCode); // Apply the discount
  };

  // Calculate the total price after applying discount
  const discountedTotal = totalPrice - totalPrice * discount;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/6 flex justify-between gap-7">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Promo Code Toggle */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={hasPromoCode}
                  onChange={(e) => setHasPromoCode(e.target.checked)}
                  className="mr-2"
                />
                I've promo code
              </label>
            </div>

            {/* Promo Code Input */}
            {hasPromoCode && (
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700">
                  Promo Code
                </label>
                <input
                  type="text"
                  value={promoCode}
                  onChange={handlePromoCodeChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {discount > 0 && (
                  <p className="text-green-600 text-sm mt-1">
                    Congratulations! You've received a {discount * 100}%
                    discount.
                  </p>
                )}
                {promoCode && discount === 0 && (
                  <p className="text-red-600 text-sm mt-1">
                    Invalid promo code.
                  </p>
                )}
              </div>
            )}

            {/* Total Price Display */}
            <div className="total-price">
              <h3 className="font-semibold text-lg text-gray-900">
                Total: ${discountedTotal.toFixed(2)}
              </h3>
            </div>

            {/* Proceed to Payment Button */}
            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Proceed to Payment
            </button>
          </form>

          {/* Close Modal Button */}
          <button
            onClick={onRequestClose}
            className="w-full mt-4 px-4 py-2 bg-red-500 text-white font-medium rounded-lg shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Close
          </button>
        </div>
        <div className="w-full ">
          <div className="bg-red-400 h-full round-">
            <img src={""} alt="Checkout" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CheckoutModal;
