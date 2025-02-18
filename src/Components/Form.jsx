import React, { useState } from 'react';
import form_image from '../assets/Form_image.png';
import { FaThumbsUp } from 'react-icons/fa'; // Importing a like icon

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); 
  };

  return (
    <div className='mt-20'>
      <div className='w-full h-auto relative flex flex-col md:flex-row justify-between 
        gap-x-5 bg-light-blue rounded-[40px] p-10 md:p-13 lg:px-16 lg:py-16'>


        {isSubmitted ? (
          <div className="w-full flex flex-col items-center justify-center text-center p-8">
            <FaThumbsUp className="text-dark-blue text-6xl mb-6" /> 
            <h4 className="text-xl text-lighter-black font-medium ">Thanks for your interest!</h4>
            <p className=" mt-3 text-2xl font-semibold">
              We will get back to you soon.
            </p>
          </div>
        ) : (
          <>
           
            <div className='w-full md:w-2/4 xl:w-2/5'>
              <h4 className='text-2xl font-semibold'>We will help you choose!</h4>
              <p className='w-11/12 xl:w-full text-lg my-5 md:mb-8 text-lighter-black'>
                If you have any questions about the course or if you don't know what to choose, leave your number - we will answer all your questions.
              </p>
              <img className='hidden lg:block absolute bottom-0 left-28' src={form_image} alt="form_image" />
            </div>

            <form className='w-full md:w-2/4 lg:w-[53%]' onSubmit={handleSubmit}>
              <input required className='w-full py-4 px-6 rounded-[20px] outline-none border border-dark-blue' type="text" placeholder='Your Name' />

              <div className='w-full flex flex-wrap justify-between mt-5 lg:mt-8 gap-y-7 lg:gap-y-0'>
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    className='w-[25%] p-4 px-5 rounded-[20px] outline-none border border-dark-blue' 
                    value='+998' 
                    readOnly 
                  />
                  <input 
                    type="text" 
                    className='w-[70%] p-4 px-6 rounded-[20px] outline-none border border-dark-blue' 
                    placeholder='Your Phone Number'
                    maxLength={9} 
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                  />
                </div>
                <input required type="email" className='mt-7 w-full sm:w-[47%] p-4 px-6 rounded-[20px] outline-none border border-dark-blue' placeholder='Your Email' />
              </div>

              <div className='flex justify-center md:justify-start'>
                <button type="submit" className="submit-button w-[14rem] md:w-[8.7rem] h-[3.5rem] mt-8 lg:mt-14 
                  rounded-[20px] bg-dark-blue opacity-50 text-white hover:opacity-100 ease-in-out duration-150">
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Form;
