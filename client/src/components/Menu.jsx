import React from "react";
import MenuCard from "../layouts/MenuCard"; // Import the MenuCard component

const Menu = () => {
  // Example items with titles, images, and prices
  const items = [
    { title: "Americano", img: "../", price: 200 },
    { title: "Espresso", img: "/images/espresso.jpg", price: 150 },
    { title: "Cappuccino", img: "/images/cappuccino.jpg", price: 250 },
    { title: "Latte", img: "/images/latte.jpg", price: 300 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <MenuCard
          key={index}
          title={item.title}
          img={item.img}
          value={item.price} // Pass price as 'value'
        />
      ))}
    </div>
  );
};

export default Menu;
