import React from "react";
import "./App.css";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import { CASTLES } from "./assets/information/CASTLES";
import CastlesList from "./features/castles/CastlesList";
import HomePage from "./pages/HomePage";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="faq" element={<Faq />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
