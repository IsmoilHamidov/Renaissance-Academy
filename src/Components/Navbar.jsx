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
          <div className="mx-auto max-w-7xl px-5 xl:px-0 ">
              <div className="relative flex  items-center justify-between">
                    <div className=" w-full md:w-1/2 lg:w-2/6 flex justify-between items-center xl:items-center  ">
                          <div className="flex flex-shrink-0 items-center">
                              <img className="h-32 w-28" src={logo} alt="logo"/>
                          </div>
                          <a href='#Course' className='hidden lg:flex items-center gap-x-2 bg-light-blue text-dark-blue
                           rounded-2xl h-12 py-2 px-[1.6rem] HoverBox ' >
                                Kurslar
                                <img src={book} className='w-5 h-5 ' alt="book" />
                          </a>
                          <div className="flex md:hidden relative  me-7">
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
                    </div>

                    <div className="hidden text-[1.063rem] w-11/12 md:flex items-center justify-end ">
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
                                <img src={call}className='w-6 h-6 lg:w-auto  lg:h-auto'  alt="telefon" /> 
                                <span className='hidden xl:block'>91 777541</span>
                          </a>
                    </div>


              </div>
          </div>



          
        <div class="mb-9 md:mb-0 md:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a href="#Course" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Kurslar</a>
            <a href="#Teachers" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Bizning ustozlarimiz</a>
            <a href="#AboutUs" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Biz haqimizda</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Qo'ng'iroq qilish</a>
          </div>
        </div>


      </nav>
  )
}

export default Navbar
