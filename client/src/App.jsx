import { useState } from "react";

import NavBar from "./components/NavBar";
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
import LandingProcess from "./components/processing/LandingProcess";
import LoginPopup from "./components/inaya/components/LoginPopup/LoginPopup";

import "./App.css";
import FooterBT from "./components/FooterBt";
import SusLanding from "./components/sustainability/SusLanding";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./components/inaya/pages/Cart/Cart";
import Landing2 from "./components/Landing2";
import SourceLanding from "./components/sources/SourceLanding";
import Store from "./components/Store";
import SEOOptimizationBlog from "./components/SEOoptimization";
import SeoBlogPage from "./components/Blog";
import Popup from "./components/Popup";
import Kavre from "./components/sources/places/Kavre";
import Sindupalchok from "./components/sources/places/Sindupalchok";
import Illam from "./components/sources/places/illam";
import Nuwakot from "./components/sources/places/Nuwakot";
import Phidim from "./components/sources/places/Phidim";
import Syanja from "./components/sources/places/Syanja";
import Rasuwa from "./components/sources/places/Rasuwa";

const App = () =>
{
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Popup />
      {showLogin ? <LoginPopup nesetShowLogin={setShowLogin} /> : <></>}
      {/* <Preloader /> */}
      <Router>
        <ScrollToTop />
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/inaya" element={<Landing2 />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/product" element={<Products />} />
            <Route exact path="/sustainability" element={<SusLanding />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/review" element={<Review />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/farming" element={<LandingFarm />} />

            <Route exact path="/source" element={<SourceLanding />} />
            <Route exact path="/source/kavre" element={<Kavre />} />
            <Route exact path="/source/sindupalchok" element={<Sindupalchok />} />
            <Route exact path="/source/illam" element={<Illam />} />
            <Route exact path="/source/nuwakot" element={<Nuwakot />} />
            <Route exact path="/source/phidim" element={<Phidim />} />
            <Route exact path="/source/syanja" element={<Syanja />} />
            <Route exact path="/source/rasuwa" element={<Rasuwa />} />


            <Route exact path="/process" element={<LandingProcess />} />
            <Route exact path="/blog" element={<SeoBlogPage />} />
            <Route exact path="/seoblog" element={<SEOOptimizationBlog />} />
            {/* <Route exact path="/order" element={<AddCart />} /> */}
            <Route exact path="/inaya/home" element={<Home2 />} />
            <Route exact path="/inaya/order" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
        <FooterBT />
      </Router>
    </div>
  );
};

export default App;
