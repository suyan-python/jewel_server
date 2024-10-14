import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"; // Ensure food_list contains your food items with id and price

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const itemPrices = food_list.reduce((acc, item) => {
    acc[item.id] = item.price; // Assuming each item has an id and price
    return acc;
  }, {});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Increment quantity or set to 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev; // Item not in cart
      const newQuantity = prev[itemId] - 1;

      if (newQuantity <= 0) {
        const { [itemId]: _, ...rest } = prev; // Remove item if quantity is 0
        return rest;
      }

      return { ...prev, [itemId]: newQuantity }; // Update quantity
    });
  };

  const getTotalPrice = () => {
    return Object.keys(cartItems).reduce((total, id) => {
      return total + (itemPrices[id] || 0) * cartItems[id]; // Calculate total price
    }, 0);
  };

  useEffect(() => {
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalPrice,
    itemPrices, // Provide itemPrices
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
