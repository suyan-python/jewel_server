import React from "react";
import MenuCard from "../layouts/MenuCard";
import img1 from "../assets/pictures/coffeepics/beans.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-32 mb-8">
        Our Menu
      </h1>

      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img1} title="Espresso" />
      </div>
    </div>
  );
};

export default Menu;
