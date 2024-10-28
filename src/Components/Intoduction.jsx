import React, { useState } from 'react'
import star from "../assets/Star.png"
import Ellipse  from "../assets/Ellipse 2.png"

function Intoduction() {
    const [activeIndex, setActiveIndex] = useState(2); 

    const handleButtonClick = (index) => {
        setActiveIndex(index); 
    };

  return (
    <div>

        <div className='full mt-5 flex flex-wrap justify-between mx-auto bg-light-blue rounded-[44px] h-auto '> 
            <div className='w-full md:w-2/4 p-7  md:py-14 lg:px-14 row h-auto'>
                <span className='text-gray-500 flex items-center text-base'>Zamonaviy IT o'quv markazi 
                    <img className='ms-2' src={star} alt="star" />
                </span>
                <div className='w-full sm:w-11/12 my-6 md:mt-6 md:mb-14 text-xl md:text-2xl lg:text-title-size font-semibold text-lighter-black'>
                    <span className='leading-snug'>Biz sizga <span className='text-dark-blue'>zamonaviy kasbni </span> o'rganishga va ish boshlashingizga yordam beramiz</span>  
                </div>
                <a href='#Course' className='HoverButton flex justify-center items-center gap-x-2 relative z-10 overflow-hidden
                 bg-dark-blue text-white rounded-[20px] h-12 sm:h-14 py-2 px-2 w-full sm:w-48' >
                    <span className='z-10'>Kurslarni tanlash</span>
                </a>
            </div>
            <img className='hidden w-1/2 md:block  lg:w-[30rem] rounded-[44px]' src={Ellipse} alt="introduction_image" />
        </div>


        <div className='hidden w-full lg:flex justify-end mt-6 gap-x-4'>
            {Array.from({ length: 3 }, (_, index) => (
                <button
                    key={index}
                    className={` rounded border-[3px] ${
                        activeIndex === index || (index === 2 && activeIndex === 2)
                            ? 'border-blue-500 w-40'
                            : 'border-gray-300 w-12' 
                    }`}
                    onClick={() => handleButtonClick(index)} 
                />
            ))}
        </div>
    </div>
  )
}

export default Intoduction
