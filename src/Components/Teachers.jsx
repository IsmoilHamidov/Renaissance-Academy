import React from 'react';
import { teacher } from '../constants/teachers';

function Teachers() {
  return (
    <div className='mt-20' id='Teachers'>
      <h3 className="text-title-size font-semibold leading-normal text-lighter-black mb-8">
        Bizning ustozlarimiz
      </h3>
      <div className='w-full flex flex-wrap gap-y-5'>
        {teacher.map((info, index) => (
          <div key={index} className='w-[25%] flex flex-col items-center p-4 '>
            <img src={info.Img} alt={info.T_Name} className='mb-2 w-60 h-60 object-contain'  />
            <p className='text-2xl mt-5 mb-1 text-lighter-black'>{info.T_Name}</p>
            <div className='flex justify-center items-center w-full'>
                <img src={info.job_icon} alt={info.job} className='my-2 me-2' />
                <p className='text-base font-medium text-lighter-black'>{info.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
