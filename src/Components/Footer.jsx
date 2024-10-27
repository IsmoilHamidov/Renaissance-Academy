import React from 'react'
import logo from '../assets/navlogo.png'

function Footer() {
  return (

    <div className='w-full bg-light-blue py-10 mt-20'>
        <div className='max-w-7xl  flex flex-wrap justify-between  m-auto '>
            <div className='w-[25%] '>
                <img src={logo} alt="logo" className='h-36 w-[6.5rem] object-cover'/>
                <p className='text-lighter-black w-4/5' >Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz orqali 
                    qiymat sotamiz.
                </p>
            </div>
            <div className='w-[28%]'>
                <h4 className='text-gray-400'>Manzil</h4>
                <p className='text-center mt-3 text-lighter-black w-4/5'>Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B</p>
            </div>
            <div className='w-[15%]'>
                <h4 className='text-gray-400'>Yordam</h4>
                <a className='block mt-3 text-lighter-black cursor-pointer HoverText'>+998 91 7775411</a>
            </div>
            <div className='w-[30%] grid content-between'>
                <div>
                    <h4 className='text-gray-400'>Pochta</h4>
                    <a href='#' className='block mt-3 text-lighter-black HoverText'>Info@farobiy.com</a>
                </div>

                <div className='w-full flex justify-between  text-lighter-black'>
                    <a href='#' className='cursor-pointer HoverText'>Facebook</a>
                    <a href='#' className='cursor-pointer HoverText'>Twitter</a>
                    <a href='#' className='cursor-pointer HoverText'>Telegram</a>
                    <a href='#' className='cursor-pointer HoverText'>Instagram</a>
                </div>
            </div>

        </div>

        <div className='max-w-7xl m-auto'>
            <hr className='border border-gray-300 my-9'></hr>
            <p className='text-lighter-black'>© 2022 by <a href="https://www.fido.studio/" target='_blank' className='underline underline-offset-1'>Fido Studio.</a> Farobiy IT Academy</p>
        </div>

    </div>
  )
}

export default Footer
