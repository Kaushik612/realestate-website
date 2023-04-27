import React, { useEffect, useState } from "react";
import Navbar from "./components/navigation/Navbar";
import Hero from "./sections/Hero";
import Residencies from "./sections/Residencies";
import Value from "./sections/Value";
import Contact from "./sections/Contact";
import GetStarted from "./sections/GetStarted";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </>
  );
};

export default App;
