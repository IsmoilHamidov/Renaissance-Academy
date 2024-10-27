import React, { useState } from 'react'
import star from "../assets/Star.png"
import Ellipse  from "../assets/Ellipse 2.png"

function Intoduction() {
    const [activeIndex, setActiveIndex] = useState(2); // Initialize to last button index

    const handleButtonClick = (index) => {
        setActiveIndex(index); // Update the active index to the clicked button
    };

  return (
    <div>
        <div className='full mt-5 flex flex-wrap justify-between mx-auto bg-light-blue rounded-[44px] h-auto '>
            <div className='w-2/4 py-14 px-14 row h-auto'>
                <span className='text-gray-500 flex items-center text-base'>Zamonaviy IT o'quv markazi 
                    <img className='ms-2' src={star} alt="star" />
                </span>
                <h3 className='w-11/12 mt-6 mb-12 text-title-size font-semibold leading-normal text-lighter-black'>
                    Biz sizga <span className='text-dark-blue'>zamonaviy kasbni </span>o'rganishga va ish boshlashingizga yordam beramiz
                </h3>
                <a href='#Course' className='HoverButton flex justify-center items-center gap-x-2 relative z-10 overflow-hidden
                 bg-dark-blue text-white rounded-[20px] h-14 py-2 px-2 w-48' >
                    <span className='z-10'>Kurslarni tanlash</span>
                </a>
            </div>
            <img className='rounded-[44px] w-[30rem] ' src={Ellipse} alt="" />
        </div>

        <div className='w-full flex justify-end mt-6 gap-x-4'>
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
