import React from 'react'
import form_image from '../assets/Form_image.png'

function Form() {
  return (

    <div className='mt-20'>
        <div className='w-full h-auto relative flex justify-between gap-x-5 bg-light-blue rounded-[40px] px-16 py-16'>
            <div className='w-2/5'>
                <h4 className='text-2xl font-semibold'>Tanlovda yordam beramiz!</h4>
                <p className='text-lg mt-5 mb-8 text-lighter-black'>Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.</p>
                <img className='absolute bottom-0 left-28' src={form_image} alt="form_image" />
            </div>
            <form className='w-[53%]'>
                <input className='w-full  py-4 px-6 rounded-[20px] outline-none border border-dark-blue'  type="text" placeholder='Ismingiz' />
                <div className='w-full flex justify-between  mt-8'>
                    <input type="number" className='w-[47%] p-4 px-6 rounded-[20px] outline-none border border-dark-blue' placeholder='Telefon nomeringiz' />
                    <input type="email" className='w-[47%] px-6 rounded-[20px] outline-none border border-dark-blue' placeholder='Pochtangiz'/>
                </div>
                <button type="submit" className="submit-button  w-[8.7rem] h-[3.5rem] mt-14 
                rounded-[20px] bg-dark-blue opacity-50 text-white hover:opacity-100 ease-in-out duration-150">Yuborish</button>
            </form>
        </div>
    </div>
  )
}

export default Form
