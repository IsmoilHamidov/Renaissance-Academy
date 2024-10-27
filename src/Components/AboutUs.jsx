import React from 'react'
import like from '../assets/like.png'
import star from '../assets/medal-star.png'
import Frame1 from '../assets/Frame1.png'
import Frame2 from '../assets/Frame2.png'


function AboutUs() {
  return (
    <div className='mt-20' id='AboutUs'>
      <h3 className="text-title-size font-semibold leading-normal text-lighter-black mb-8">
        Biz haqimizda
      </h3>

        <div className='flex justify-between h-auto gap-x-8'>
            <div className='w-2/5 grid content-between '>
                <div className='bg-[#F1E2C1] p-8  rounded-[40px]'>
                    <img src={like} alt="like" />
                    <p className='w-10/12 text-[1.3rem] leading-8 text-lighter-black mt-9'>Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati odamlar hayotida o'sish.</p>
                </div>
                <div className=''>
                    <img src={Frame2} className='w-full object-cover' alt="about_img" />
                </div>
            </div>

            <div className='w-3/5 grid content-between'>
                <div>
                    <img src={Frame1} className='w-full h-[28rem] mb-7' alt="about_img" />
                </div>
                <div className='bg-[#D8DBFB] p-8 pb-16  rounded-[40px]'>
                    <img src={star} alt="like" />
                    <p className='w-8/12 text-[1.3rem] leading-8 text-lighter-black mt-9'>Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya, video, freelancing va boshqa mavzularda ijodiy va qiziquvchan.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
