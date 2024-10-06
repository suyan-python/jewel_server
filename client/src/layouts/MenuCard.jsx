import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const MenuCard = (props) => {
  const [quantity, setQuantity] = useState(1);

  // Function to handle increasing quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Calculate the total price based on the quantity
  const totalPrice = props.value * quantity;

  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
      <div>
        <img className="rounded-xl" src={props.img} alt="img" />
      </div>
      <div className="p-2 mt-5">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold text-xl"> {props.title} </h3>
          {/* Dynamic price based on quantity */}
          <h3 className="font-semibold text-xl">Rs. {totalPrice}</h3>
        </div>
        <div className="flex flex-row justify-between mt-3">
          {/* Quantity controls */}
          <div className="flex gap-2 items-center">
            <button
              onClick={decreaseQuantity}
              className="px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded-lg"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded-lg"
            >
              +
            </button>
          </div>
          <span className="flex items-center bg-backgroundColor px-3 py-2 rounded-full cursor-pointer">
            <FaShoppingCart size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
