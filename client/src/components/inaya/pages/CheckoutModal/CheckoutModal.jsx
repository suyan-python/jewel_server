import React, { useState } from "react";
import Modal from "react-modal";
import jsPDF from "jspdf";

Modal.setAppElement("#root");

const CheckoutModal = ({ isOpen, onRequestClose, totalPrice, items }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [hasPromoCode, setHasPromoCode] = useState(false);
  const [discount, setDiscount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate PDF receipt after confirming payment
    generatePDF();
    console.log("Proceeding to payment with details:", {
      name,
      email,
      phone,
      promoCode,
      discount,
    });

    onRequestClose(); // Close the modal after submission
  };

  const applyPromoCode = (code) => {
    if (code === "VUDEVI@2014") {
      setDiscount(0.4); // 40% discount
    } else if (code === "FROMWEBSITE") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0); // No discount
    }
  };

  const handlePromoCodeChange = (e) => {
    const enteredCode = e.target.value;
    setPromoCode(enteredCode);
    applyPromoCode(enteredCode);
  };

  const discountedTotal = totalPrice - totalPrice * discount;

  // Function to generate PDF receipt
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 30);
    doc.text(`Email: ${email}`, 20, 40);
    doc.text(`Phone: ${phone}`, 20, 50);
    doc.text(`Promo Code: ${promoCode}`, 20, 60);
    doc.text(`Discount: ${discount * 100}%`, 20, 70);
    doc.text(`Total Price: $${discountedTotal.toFixed(2)}`, 20, 80);

    // Add item details to PDF
    let yOffset = 90; // Starting y position for items
    items.forEach((item, index) => {
      doc.text(
        `${item.name} - $${item.price} x ${item.quantity}: $${item.totalPrice}`,
        20,
        yOffset
      );
      yOffset += 10; // Increment y position for next item
    });

    doc.save("receipt.pdf"); // Save the PDF
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div className="form-group flex items-center">
            <input
              type="checkbox"
              checked={hasPromoCode}
              onChange={(e) => setHasPromoCode(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm font-medium text-gray-700">
              I've promo code
            </label>
          </div>

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
                  Congratulations! You've received a {discount * 100}% discount.
                </p>
              )}
              {promoCode && discount === 0 && (
                <p className="text-red-600 text-sm mt-1">Invalid promo code.</p>
              )}
            </div>
          )}

          <div className="total-price">
            <h3 className="font-semibold text-lg text-gray-900 text-center">
              Total: ${discountedTotal.toFixed(2)}
            </h3>
          </div>

          <div className="cart-items">
            <h4 className="text-lg font-semibold">Items:</h4>
            <ul className="list-disc pl-5">
              {items.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price} x {item.quantity}: $
                  {item.totalPrice}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Proceed to Payment
          </button>
        </form>

        <button
          onClick={onRequestClose}
          className="w-full mt-4 px-4 py-2 bg-red-500 text-white font-medium rounded-lg shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CheckoutModal;
