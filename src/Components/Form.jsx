import React from 'react'
import form_image from '../assets/Form_image.png'

function Form() {
  return (

    <div className='mt-20'>
        <div className='w-full h-auto relative flex flex-col md:flex-row justify-between 
        gap-x-5 bg-light-blue rounded-[40px] p-10 md:p-13 lg:px-16 lg:py-16'>
            <div className=' w-full md:w-2/4 xl:w-2/5'>
                <h4 className='text-2xl font-semibold'>Tanlovda yordam beramiz!</h4>
                <p className='w-11/12 xl:w-full text-lg my-5 md:mb-8 text-lighter-black'>Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.</p>
                <img className='hidden lg:block  absolute bottom-0 left-28' src={form_image} alt="form_image" />
            </div>
            <form className='w-full md:w-2/4 lg:w-[53%]'>
                <input className='w-full  py-4 px-6 rounded-[20px] outline-none border border-dark-blue'  type="text" placeholder='Ismingiz' />
                <div className='w-full flex flex-wrap justify-between mt-5 lg:mt-8 gap-y-5 lg:gap-y-0'>
                    <input type="number" className='w-full sm:w-[47%] p-4 px-6 rounded-[20px] outline-none border border-dark-blue' placeholder='Telefon nomeringiz' />
                    <input type="email" className='w-full sm:w-[47%] p-4 px-6 rounded-[20px] outline-none border border-dark-blue' placeholder='Pochtangiz'/>
                </div>
                <div className='flex justify-center md:justify-start'>
                    <button type="submit" className="submit-button  w-[14rem] md:w-[8.7rem] h-[3.5rem] mt-8 lg:mt-14 
                    rounded-[20px] bg-dark-blue opacity-50 text-white hover:opacity-100 ease-in-out duration-150">Yuborish</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
