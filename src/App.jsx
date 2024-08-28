import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Products from "./components/Products";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div id="home">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
