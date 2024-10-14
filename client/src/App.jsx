import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Home2 from "./components/inaya/pages/Home/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Products from "./components/Products";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Login from "./components/Modal";
import Landing from "./components/Landing";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingFarm from "./components/farming/LandingFarm";
import Contact from "./components/contact/Contact";
import SourceHero from "./components/sources/SourceHero";
import LandingProcess from "./components/processing/LandingProcess";
import AddCart from "./components/addtocart/Cart";
import Preloader from "./components/PreLoader";
import LoginPopup from "./components/inaya/components/LoginPopup/LoginPopup";

import "./App.css";
import FooterBT from "./components/FooterBt";
import SusLanding from "./components/sustainability/SusLanding";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      {showLogin ? <LoginPopup nesetShowLogin={setShowLogin} /> : <></>}
      {/* <Preloader /> */}
      <Router>
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/inaya" element={<Home />} />
            <Route exact path="/inaya/home" element={<Home2 />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/product" element={<Products />} />
            <Route exact path="/sustainability" element={<SusLanding />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/review" element={<Review />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/farming" element={<LandingFarm />} />
            <Route exact path="/source" element={<SourceHero />} />
            <Route exact path="/process" element={<LandingProcess />} />
            <Route exact path="/order" element={<AddCart />} />
          </Routes>
        </main>
        <Footer />
        <FooterBT />
      </Router>
    </div>
  );
};

export default App;
