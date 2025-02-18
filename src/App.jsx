import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Components/Home"; 
import EachCourse from "./Pages/EachCourse"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Components/Footer";


function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl m-auto px-5 md:px-6 xl:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eachCourse/:id" element={<EachCourse />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
