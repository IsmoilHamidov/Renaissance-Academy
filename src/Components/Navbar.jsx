import React from 'react';
import logo from '../assets/navlogo.png';
import book from '../assets/Book.png';
import call from '../assets/call.png';
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("UZ");

  const toggleDropdown = () => setIsOpen(!isOpen);

  // const handleSelect = (option) => {
  //   setSelected(option);
  //   setIsOpen(false);
  // };
  // const options = ["UZ", "RU", "EG"];

  return (
    <nav className="w-full">
      <div className="mx-auto max-w-7xl px-5 xl:px-0">
        <div className="relative flex items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-between items-center xl:items-center">
            <Link to={"/"} className="flex flex-shrink-0 items-center">
              <img className="h-28 w-44 object-contain" src={logo} alt="logo"/>
            </Link>
            <a href='#Course' className='hidden lg:flex items-center gap-x-2 bg-light-blue text-dark-blue rounded-2xl h-12 py-2 px-[1.6rem] HoverBox'>
              Courses
              <img src={book} className='w-5 h-5' alt="book" />
            </a>
            {/* <div className="flex md:hidden relative me-7">
              <button onClick={toggleDropdown} className="flex justify-center items-center gap-x-1 px-4 h-12 py-2 border-[3px] border-light-blue text-dark-blue rounded-2xl focus:border-dark-blue ease-in duration-300">
                {selected}
                <AiOutlineDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                  {options.map((option, index) => (
                    <li key={index} onClick={() => handleSelect(option)} className="px-4 py-2 hover:bg-light-blue cursor-pointer">
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div> */}
          </div>

          <div className="hidden text-[1.063rem] w-11/12 md:flex items-center justify-end gap-x-8">
            <a className='text-text-black HoverText' href="#Teachers">Our Teachers</a>
            <a className='text-text-black  HoverText' href="#AboutUs">About Us</a>
            <a className='text-text-black   HoverText' href="#FAQ">FAQ</a>
            {/* <div className="relative inline-block me-7">
              <button onClick={toggleDropdown} className="flex justify-center items-center gap-x-1 px-4 h-12 py-2 border-[3px] border-light-blue text-dark-blue rounded-2xl focus:border-dark-blue ease-in duration-300">
                {selected}
                <AiOutlineDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                  {options.map((option, index) => (
                    <li key={index} onClick={() => handleSelect(option)} className="px-4 py-2 hover:bg-light-blue cursor-pointer">
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div> */}

            <a href="tel:+993290348" target='_blank' className='flex justify-center items-center gap-x-2 px-5 h-12 py-2 bg-light-blue text-dark-blue rounded-2xl text-[0.8rem] font- HoverBox'>
              <img src={call} className='w-6 h-6 lg:w-auto lg:h-auto' alt="call" />
              <span className='hidden xl:block'>+998 993290348</span>
            </a>
          </div>

        </div>
      </div>

      <div className="mb-9 md:mb-0 md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#Course" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Courses</a>
          <a href="#Teachers" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Our Teachers</a>
          <a href="#AboutUs" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</a>
          <a href="tel:+993290348" target='_blank' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Call Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
