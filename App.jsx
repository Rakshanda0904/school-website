import React from "react";
import "./index.css";
import NavBar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro"
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro/>
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;

