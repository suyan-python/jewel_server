import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Products from "./components/Products";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Hero from "./components/Hero";
import Landing from "./components/Landing";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FarmingHero from "./components/farming/FarmingHero";
import { FaLandmark } from "react-icons/fa";
import LandingFarm from "./components/farming/LandingFarm";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/inaya" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product" element={<Products />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/farming" element={<LandingFarm />} />
        </Routes>
        <Footer />
      </Router>

      <main>
        {/* <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="products">
          <Products />
        </div>

        <div id="reviews">
          <Review />
        </div> */}
      </main>
    </div>
  );
};

export default App;
