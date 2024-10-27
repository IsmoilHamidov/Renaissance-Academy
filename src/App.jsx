import React, { useEffect } from "react"
import Navbar from './Components/Navbar'
import Introduction from './Components/Intoduction'
import Course from "./Components/Course"
import Teachers from "./Components/Teachers"
import AboutUs from "./Components/AboutUs"
import Questions from "./Components/Questions"
import Form from "./Components/Form"
import Footer from "./Components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
        duration: 1000, 
        once: true,    
        mirror: false,  
    });
}, []);

  return (
    <>
        <Navbar/>
        <div className="max-w-7xl m-auto">
            <Introduction/>
            <Course/>
            <Teachers/>
            <AboutUs/>
            <Questions/>
            <Form/>
        </div>
        <Footer/>
    </>
  )
}

export default App
