import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col space-y-2 items-center justify-center">
      <div className="flex items-center space-x-2 animate-pulse">
        <span className="font-semibold">Purified Beans:</span>
        <span className="text-yellow-300">High Quality</span>
      </div>
      <div className="flex items-center space-x-2 animate-pulse">
        <span className="font-semibold">Location:</span>
        <span className="text-yellow-300">Illam</span>
      </div>
      <div className="flex items-center space-x-2 animate-pulse">
        <span className="font-semibold">Contact:</span>
        <span className="text-yellow-300">+977 98000000</span>
      </div>
      <div className="flex items-center space-x-2 animate-pulse">
        <span className="font-semibold">Email:</span>
        <span className="text-yellow-300">jewelhimalayanproducts</span>
      </div>
    </div>
  );
};

export default Sidebar;
