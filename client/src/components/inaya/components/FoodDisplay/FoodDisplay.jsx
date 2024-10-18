import React, { useContext } from "react";
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

  // Define the number of items to display when "All" is selected
  const maxItemsToShow = 6;

  // Filter food list based on the selected category
  const filteredItems =
    category === "All"
      ? shuffleArray(food_list).slice(0, maxItemsToShow) // Shuffle and slice for random items when "All" is selected
      : food_list.filter((item) => item.category === category); // Show all items for the selected category

  return (
    <div className="food-display-container">
      <h2 className="food-display-title">Top Dishes Near You</h2>

      {/* Display category heading only once if a specific category is selected */}
      {category !== "All" && (
        <h1 className="category-heading font-medium text-3xl my-3 text-orange-400">
          {category}
        </h1>
      )}

      <div className="food-display-list">
        {filteredItems.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
