import React from 'react'
import logo from '../assets/navlogo.png'
import book from '../assets/Book.png'
import call from '../assets/call.png'
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("UZ");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  const options = ["UZ", "RU", "EG"];


  return (
        <nav className="w-full">
          <div className="mx-auto max-w-7xl">
              <div className="relative flex  items-center justify-between">
                    <div className="w-9/12 flex items-center gap-x-6">
                          <div className="flex flex-shrink-0 items-center">
                              <img className="h-32 w-28" src={logo} alt="logo"/>
                          </div>
                          <a href='#Course' className='flex items-center gap-x-2 bg-light-blue text-dark-blue
                           rounded-2xl h-12 py-2 px-[1.6rem] HoverBox' >
                                Kurslar
                                <img src={book} className='w-5 h-5 ' alt="book" />
                          </a>
                    </div>

                    <div className="text-[1.063rem] w-11/12 flex items-center justify-end ">
                          <a className='text-text-black HoverText' href="#Teachers">Bizning ustozlarimiz</a>
                          <a className='text-text-black mx-11 HoverText' href="#AboutUs">Biz haqimizda</a>
                            <div className="relative inline-block me-7">
                                  <button onClick={toggleDropdown} className="flex justify-center items-center gap-x-1 px-4 h-12 py-2  border-[3px]
                                   border-light-blue text-dark-blue rounded-2xl  focus:border-dark-blue ease-in duration-300">
                                    {selected}
                                    <AiOutlineDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                  </button>
                                  {isOpen && (<ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                                      {options.map((option, index) => (
                                        <li key={index} onClick={() => handleSelect(option)}
                                          className="px-4 py-2 hover:bg-light-blue cursor-pointer"
                                        >
                                          {option}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                            </div>

                          <a className='flex justify-center items-center gap-x-2 px-5 h-12 py-2
                           bg-light-blue text-dark-blue rounded-2xl text-[0.8rem] font- HoverBox' href="#">
                                <img src={call} alt="telefon" /> 
                                +998 91 7775411
                          </a>
                    </div>


              </div>
          </div>





          <div className="sm:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
              <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
