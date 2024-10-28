import React from 'react';
import { Courses } from '../constants/course';
import arrowRight from '../assets/arrow.png'
import course_img5 from '../assets/course_img5.png'

function Course() {
  return (
    <div className="mt-12 md:mt-20" id='Course'>
      <h3 className="text-title-size font-semibold leading-normal text-lighter-black mb-8">
        Biz o'rgatadigan kurslar
      </h3>
      <div className="flex flex-col gap-y-6 lg:gap-y-0 md:flex-row flex-wrap justify-between">
            <div className='lg:w-[76%] flex flex-wrap justify-center md:justify-between gap-y-6'>
                {Courses.map((info, index) => (
                <div data-aos="zoom-in" key={index} className={`h-[15.5rem] md:h-[17rem] relative rounded-[45px] overflow-hidden  ${
                    index === 0 || index === 3 ? 'w-11/12 md:w-[40%]' : 'w-11/12 md:w-[57%]'
                    }`} >

                    <img src={info.Img} alt={info.text} className="w-full h-full object-cover"/>
                    <div className=" absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-7">
                        <p className="text-white text-2xl font-semibold tracking-[1px] leading-[1.9rem]">{info.text}</p>
                        <a href='#' className="w-full mb-1 mt-4 md:w-[8.2rem] inline-flex justify-center items-center
                         gap-2 py-[5px] lg:py-[9px] bg-dark-blue text-white rounded-xl text-base md:text-sm group hover:bg-[#1067cc] ease-in duration-150 ">
                            Batafsil 
                            <img className='hidden md:block transition-transform transform duration-200 ease-out group-hover:translate-x-1' src={arrowRight} alt="" />
                        </a>
                    </div>
                </div>
                ))}
            </div>

            <div className='w-full lg:w-[22%] h-auto flex flex-col md:flex-row lg:flex-col flex-wrap gap-y-6 lg:gap-y-0 justify-center items-center lg:justify-between'> 
                <div data-aos="zoom-in-left" className='h-[15.5rem] lg:h-[20.2rem] w-11/12 md:w-1/2 lg:w-full relative rounded-[45px] overflow-hidden'>  
                    <img src={course_img5} alt='image' className="w-full h-full object-cover"/>
                    <div className=" absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-7">
                        <p className="text-white text-2xl font-semibold tracking-[1px] leading-[1.9rem]">Marketing</p>
                        <a href='#' className="w-full mb-1 mt-4 md:w-[8.2rem] inline-flex justify-center items-center
                         gap-2 py-[5px] lg:py-[9px] bg-dark-blue text-white rounded-xl text-base md:text-sm group hover:bg-[#1067cc] ease-in duration-150 ">
                            Batafsil 
                            <img className='hidden md:block transition-transform transform duration-200 ease-out group-hover:translate-x-1' src={arrowRight} alt="" />
                        </a>
                    </div>
                </div>

                <div data-aos="zoom-in-left" className=' w-11/12 md:w-[45%] lg:w-full bg-light-blue relative p-7 h-[13rem] rounded-[45px] overflow-hidden'> 
                  <p className='w-9/12 text-lighter-black text-2xl font-semibold leading-[1.7rem]'>Tez orada yangi kurs!</p>
                  <div className='w-[150%] bg-dark-blue text-white absolute -rotate-12 bottom-11 left-1/2 transform -translate-x-1/2 text-center py-4 overflow-hidden'>
                      <p className='whitespace-nowrap text-lg xl:text-sm'>Tez orada yangi kurs! Tez orada yangi kurs Tez orada yangi kurs</p>
                  </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Course;
