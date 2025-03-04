import React, { useState } from 'react';
import { question } from '../constants/question';

export default function Questions() {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const toggleQuestion = (index) => {
        if (openQuestionIndex === index) {
            setOpenQuestionIndex(null);
        } else {
            setOpenQuestionIndex(index);
        }
    };

    return (
        <div className='mt-20 w-full' id='FAQ'>
            <h3 className="text-2xl font-semibold leading-normal text-gray-800 mb-8">
                Frequently Asked Questions
            </h3>
            {question.map((item, index) => (
                <div key={index} className="w-full my-5 py-7 px-8 bg-[#F4F4F4] rounded-[40px] transition-all">
                    <div onClick={() => toggleQuestion(index)} className="flex justify-between items-center cursor-pointer">
                        <h4 className="w-9/12 lg:w-11/12 text-[1.2rem] md:text-xl font-medium text-lighter-black">
                            {item.question}
                        </h4>
                        <span className="text-2xl rounded-full w-8 h-8 bg-[#959595] flex justify-center items-center text-white">
                            {openQuestionIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    {openQuestionIndex === index && (
                        <p className="mt-3 text-dark-blue font-semibold text-[18px] w-[97%]">
                            {item.answer}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
