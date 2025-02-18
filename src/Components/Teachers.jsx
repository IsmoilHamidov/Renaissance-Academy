import React from 'react';
import { teacher } from '../constants/teachers';

function Teachers() {
  return (
    <div className='mt-12 md:mt-20' id='Teachers'>
      <h3 className="text-title-size font-semibold leading-normal text-lighter-black mb-8">
        Our Teachers
      </h3>
      <div className='w-full flex flex-col sm:flex-row flex-wrap gap-y-3 justify-between lg:justify-normal'>
        {teacher.map((info, index) => (
          <div key={index} className='w-full md:w-[30%] lg:w-[25%] flex justify-center sm:justify-start flex-col sm:flex-row md:flex-col gap-x-9 md:gap-x-0 items-center p-4'>
            <img src={info.Img} alt={info.T_Name} className='mb-2 w-36 md:w-60 md:h-60 object-contain' />
            <div>
                <p className='text-center text-2xl sm:text-3xl md:text-2xl mt-2 sm:mt-0 md:mt-5 mb-1 text-lighter-black'>{info.T_Name}</p>
                <div className='flex justify-center sm:justify-normal md:justify-center items-center w-full'>
                    <img src={info.job_icon} alt={info.job} className='my-2 me-2' />
                    <p className='text-lg md:text-base font-medium text-lighter-black'>{info.job}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
