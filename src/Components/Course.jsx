import React from 'react';
import { Courses } from '../constants/course';
import arrowRight from '../assets/arrow.png'
import course_img5 from '../assets/course_img5.png'

function Course() {
  return (
    <div className="mt-20" id='Course'>
      <h3 className="text-title-size font-semibold leading-normal text-lighter-black mb-8">
        Biz orgatadigan kurslar
      </h3>
      <div className="flex flex-wrap justify-between">
            <div className='w-[76%] flex flex-wrap justify-between gap-y-6'>
                {Courses.map((info, index) => (
                <div key={index} className={`h-[17rem] relative rounded-[45px] overflow-hidden  ${
                    index === 0 || index === 3 ? 'w-full md:w-[40%]' : 'w-full md:w-[57%]'
                    }`} >

                    <img src={info.Img} alt={info.text} className="w-full  object-cover"/>
                    <div className=" absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-7">
                        <p className="text-white text-2xl font-semibold tracking-[1px] leading-[1.9rem]">{info.text}</p>
                        <a href='#' className="mb-1 mt-4 w-[8.2rem] inline-flex justify-center items-center
                         gap-2 py-[9px] bg-dark-blue text-white rounded-lg text-sm group hover:bg-[#1067cc] ease-in duration-150 ">
                            Batafsil 
                            <img className='transition-transform transform duration-200 ease-out group-hover:translate-x-1' src={arrowRight} alt="" />
                        </a>
                    </div>
                </div>
                ))}
            </div>

            <div className='w-[22%] h-auto grid content-between'> 
                <div  className='h-[21rem]  relative rounded-[45px] overflow-hidden'>  
                    <img src={course_img5} alt='image' className="w-full h-full object-cover"/>
                    <div className=" absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-7">
                        <p className="text-white text-2xl font-semibold tracking-[1px] leading-[1.9rem]">Marketing</p>
                        <a href='#' className="mb-1 mt-4 w-[8.2rem] inline-flex justify-center items-center gap-2 py-[9px] bg-dark-blue
                         text-white rounded-lg text-sm group  hover:bg-[#1067cc] ease-in duration-150">
                            Batafsil 
                            <img className='transition-transform transform duration-200 ease-out group-hover:translate-x-1' src={arrowRight} alt="" />
                        </a>
                    </div>
                </div>

                <div className='bg-light-blue relative p-7 h-[13rem] rounded-[45px] overflow-hidden'> 
                  <p className='w-9/12 text-lighter-black text-2xl font-semibold leading-[1.7rem]'>Tez orada yangi kurs!</p>
                  <div className='w-[150% bg-dark-blue text-white absolute -rotate-12 bottom-11 left-1/2 transform -translate-x-1/2 text-center py-4 overflow-hidden'>
                      <p className='whitespace-nowrap text-sm'>Tez orada yangi kurs! Tez orada yangi kurs Tez orada yangi kurs</p>
                  </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Course;
