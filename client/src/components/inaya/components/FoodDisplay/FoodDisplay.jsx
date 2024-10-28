import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

// Helper function to shuffle the array (Fisher-Yates Shuffle)
const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Copy the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [displayItems, setDisplayItems] = useState([]);

  // Define the number of items to display when "All" is selected
  const maxItemsToShow = 6;

  useEffect(() => {
    // Shuffle food list only once on component mount
    const shuffledItems =
      category === "All"
        ? shuffleArray(food_list).slice(0, maxItemsToShow)
        : food_list.filter((item) => item.category === category);
    setDisplayItems(shuffledItems);

    // Smooth scroll to the food_display section
    const scrollToSection = document.getElementById("food_display");
    if (scrollToSection) {
      scrollToSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [food_list, category, maxItemsToShow]);

  return (
    <>
      <div id="food_display"></div>
      <div className="food-display-container">
        <h2 className="food-display-title">Top Dishes Near You</h2>

        {/* Display category heading only once if a specific category is selected */}
        {category !== "All" && (
          <h1 className="category-heading font-medium text-3xl my-3 text-orange-400">
            {category}
          </h1>
        )}

        <div className="food-display-list">
          {displayItems.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
