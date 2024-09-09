import React from "react";
import Button from "../layouts/Button";
import Cup from "../assets/pictures/person/avatar6.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-cafe bg-cover flex flex-col items-center justify-center rounded-3xl">
      <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 backdrop-blur-md rounded-3xl">
        <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0 text-white">
          <h1 className="font-medium text-5xl text-center lg:text-start leading-tight">
            Start your Day with
            <br />
            The Mystical Coffee by JHP
          </h1>
          <p>
            Boost your productivity and build your mood with Mystical Coffee
          </p>

          <div className="flex flex-row gap-6">
            <Link to={"/about"}>
              <Button title="ABOUT ⤴" />
            </Link>
            <Link to={"/product"}>
              <Button title="Products ⤴" />
            </Link>
            {/* <Link to={"/review"}>
            <Button title="Reviews" />
          </Link> */}
          </div>
        </div>
        <div className="relative">
          <img className="rounded-full w-96" src={Cup} alt="img" />
          <div className="absolute bg-white px-8 py-2 top-5 right-0 rounded-full">
            <h2 className="font-semibold">The Coffee Is Really Good!</h2>
          </div>
          {/* <div className="absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full">
            <h2>Cappuccino</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
