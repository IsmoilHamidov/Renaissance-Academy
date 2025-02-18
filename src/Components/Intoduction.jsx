import React, { useState } from 'react';
import star from "../assets/Star.png";
import Ellipse from "../assets/Ellipse 2.png";

function Introduction() {
    const [activeIndex, setActiveIndex] = useState(2);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

  return (
    <div>
        <div className='full mt-9 flex flex-wrap justify-between mx-auto bg-light-blue rounded-[44px] h-auto '>
            <div className='w-full md:w-2/4 p-7  md:py-14 lg:px-14 row h-auto'>
                <span className='text-gray-500 flex items-center text-base'>
                    Modern educational center 
                    <img className='ms-2' src={star} alt="star" />
                </span>
                <div className='w-full sm:w-11/12 my-6 md:mt-6 md:mb-16 text-xl md:text-2xl lg:text-title-size font-semibold text-lighter-black'>
                    <span className='leading-snug'>Welcome to Renaissance Academy, Unlock your potential with <span className='text-dark-blue'> modern skills</span> and launch your career with confidence</span>  
                </div>
                <a href='#Course' className='HoverButton flex justify-center items-center gap-x-2 relative z-10 overflow-hidden bg-dark-blue text-white rounded-[20px] h-12 sm:h-14 py-2 px-2 w-full sm:w-48'>
                    <span className='z-10'>Choose Courses</span>
                </a>
            </div>
            <img className='hidden w-1/2 md:block  lg:w-[30rem] rounded-[44px]' src={Ellipse} alt="introduction_image" />
        </div>
    </div>
  );
}

export default Introduction;
