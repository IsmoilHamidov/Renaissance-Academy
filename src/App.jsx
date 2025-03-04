import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Components/Home"; 
import EachCourse from "./Pages/EachCourse"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Components/Footer";
import "./Store/i18n";
import { useTranslation } from "react-i18next";
import Loader from "./Components/Loader";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const [loading, setLoading] = useState(true); // State to control loader visibility

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });

  
    setTimeout(() => {
      setLoading(false);
    }, 2500); 
  }, []);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <Router> 
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Navbar />
          <div className="max-w-7xl m-auto px-5 md:px-6 xl:px-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/eachCourse/:id" element={<EachCourse />} />
              <Route path="*" element={<NotFound />} /> 
            </Routes>
          </div>
          <Footer/>
        </>
      )}
    </Router>
  );
}

export default App;
