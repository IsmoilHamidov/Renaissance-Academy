import React from 'react';
import logo from '../assets/navlogo.png';

function Footer() {
  return (
    <div className='w-full bg-light-blue px-10 xxl:px-0 py-10 mt-20'>
      <div className='max-w-7xl flex gap-y-5 gap-x-2 xl:gap-x-0 lg:gap-y-0 flex-col md:flex-row flex-wrap justify-between m-auto'>
        <div className='w-full md:w-[25%]'>
          <img src={logo} alt="logo" className='h-32 w-40  hidden xl:block  object-contain'/>
          <p className='text-lighter-black w-4/5 xl:mb-0 mb-5'>
            We're not here to sell you a product; we sell value through our experience.
          </p>
        </div>
        <div className='w-full md:w-[28%]'>
          <h4 className='text-gray-400'>Address</h4>
          <p className='text-start xl:text-start mt-3 text-lighter-black w-4/5'>
            Tashkent city, Yunusabad district, Amir Temur Street 129B
          </p>
        </div>
        <div className='w-full md:w-[15%]'>
          <h4 className='text-gray-400'>Help</h4>
          <a href="tel:+993290348" target='_blank' className='block mt-3 text-lighter-black cursor-pointer HoverText'>+998 993290348</a>
        </div>
        <div className='w-full md:w-[30%] flex-wrap h-auto grid content-between'>
          <div>
            <h4 className='text-gray-400'>Mail</h4>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=Info@RenaissanceAcademy.be' target='_blank' className='block mt-3 text-lighter-black HoverText'>Info@RenaissanceAcademy.com</a>
          </div>

          <div className='h-auto w-auto lg:w-full flex gap-y-4 lg:gap-y-0 gap-x-4 lg:gap-x-0 flex-wrap justify-between mt-3 lg:mt-0 text-lighter-black'>
            <a href='https://www.facebook.com/'target="_blank" rel="noopener noreferrer" className='cursor-pointer HoverText'>Facebook</a>
            <a href='https://x.com/?lang=ru' target="_blank" rel="noopener noreferrer"className='cursor-pointer HoverText'>Twitter</a>
            <a href='https://telegram.org/' target="_blank" rel="noopener noreferrer" className='cursor-pointer HoverText'>Telegram</a>
            <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer" className='cursor-pointer HoverText'>Instagram</a>
          </div>
        </div>
      </div>

      <div className='max-w-7xl m-auto'>
        <hr className='border border-gray-300 my-9'></hr>
        <p className='text-lighter-black'>© 2025 Renaissance Academy</p>
      </div>
    </div>
  );
}

export default Footer;
