import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import Cart from "../../pages/Cart/Cart";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="explore-menu-title">Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>

      {/* Fixed Div at Top Right Corner */}
      <div className="fixed-top-right">
        {/* Call your components here */}
        {/* <p>Your fixed component or button here</p> */}
        <Cart />
        {/* Example: <YourComponent /> */}
      </div>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className={`explore-menu-list-item ${
                category === item.menu_name ? "active" : ""
              }`}
            >
              <img
                className="menu-image"
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p className="menu-name">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="separator" />
    </div>
  );
};

export default ExploreMenu;
