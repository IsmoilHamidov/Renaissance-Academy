import React, { useEffect } from 'react';
import logo from '../assets/navlogo.png';
import book from '../assets/Book.png';
import call from '../assets/call.png';
import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const savedLanguage = localStorage.getItem('i18nextLng') || 'uz'
  const [selected, setSelected] = useState(savedLanguage.toUpperCase()); 

  const toggleDropdown = () => setIsOpen(!isOpen);


  const languageMap = {
    UZ: 'uz', 
    RU: 'ru', 
    EG: 'en',
  };

  useEffect(() => {
    i18n.changeLanguage(savedLanguage);
  }, [savedLanguage, i18n]);

  const handleSelect = (option) => {
    const lng = languageMap[option];
    setSelected(option);
    setIsOpen(false);
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem('i18nextLng', lng);
    });
  };

  const options = ['UZ', 'RU', 'EG'];
  const navigate = useNavigate();

  
  const [activeItem, setActiveItem] = useState('Course');
  const handleNavigation = (sectionId) => {
    navigate('/'); 
    setActiveItem(sectionId); // 

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); 
  };
  


  return (
    <nav className="w-full">
      <div className="mx-auto max-w-7xl  xl:px-0">
        <div className="relative flex items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-between items-center xl:items-center">
            <Link to={'/'} className="flex flex-shrink-0 items-center">
              <img className="h-28 w-44 object-contain" src={logo} alt="logo" />
            </Link>
            <a
              onClick={() => handleNavigation('Course')}
              className="cursor-pointer hidden lg:flex items-center gap-x-2 bg-light-blue text-dark-blue rounded-2xl h-12 py-2 px-[1.6rem] HoverBox"
            >
              Courses
              <img src={book} className="w-5 h-5" alt="book" />
            </a>
            {/* <div className="flex md:hidden relative me-7">
              <button
                onClick={toggleDropdown}
                className="flex justify-center items-center gap-x-1 px-4 h-12 py-2 border-[3px] border-light-blue text-dark-blue rounded-2xl focus:border-dark-blue ease-in duration-300"
              >
                {selected}
                <AiOutlineDown
                  className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelect(option)}
                      className="px-4 py-2 hover:bg-light-blue cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div> */}
          </div>
          <div className="hidden text-[1.063rem] w-11/12 md:flex items-center justify-end gap-x-11">
            <a className="cursor-pointer text-text-black HoverText"  onClick={() => handleNavigation('Teachers')} >
              Our Teachers
            </a>
            <a className="cursor-pointer text-text-black  HoverText" onClick={() => handleNavigation('AboutUs')} >
              About Us
            </a>
            <a className="cursor-pointer text-text-black   HoverText" onClick={() => handleNavigation('FAQ')} >
              FAQ
            </a>

            <a
              href="tel:+993290348"
              target="_blank"
              className="cursor-pointer flex justify-center items-center gap-x-2 px-5 h-12 py-2 bg-light-blue text-dark-blue rounded-2xl text-[0.8rem] font- HoverBox"
            >
              <img src={call} className="w-6 h-6 lg:w-auto lg:h-auto" alt="call" />
              <span className="hidden xl:block">+998 993290348</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mb-12 md:mb-0 md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 ">
        {[
          { name: 'Course', label: 'Courses' },
          { name: 'Teachers', label: 'Our Teachers' },
          { name: 'AboutUs', label: 'About Us' },
          { name: 'FAQ', label: 'FAQ' },
        ].map((item) => (
          <a
            key={item.name}
            onClick={() => handleNavigation(item.name)}
            className={`cursor-pointer block rounded-md px-3 py-2 text-base font-medium ${
              activeItem === item.name
                ? 'bg-dark-blue text-white' // Active style
                : 'text-lighter-black hover:bg-light-blue' // Default style
            }`}
          >
            {item.label}
          </a>
        ))}

        {/* Call Us Link (No active effect) */}
        <a
          href="tel:+993290348"
          target="_blank"
          className="cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-lighter-black hover:bg-light-blue"
        >
          Call Us
        </a>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;