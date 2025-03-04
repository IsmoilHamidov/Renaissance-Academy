import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa'; // Import like icon

function Modal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); 
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-7 py-7 rounded-xl shadow-xl max-w-md w-full flex flex-col items-center">
        
        {isSubmitted ? (
          // Success Message after Form Submission
          <div className="flex flex-col items-center text-center p-5">
            <FaThumbsUp className="text-blue-600 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800">Thanks for your interest!</h2>
            <p className="text-lg text-gray-600 mt-3">
              We will contact you soon.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        ) : (
          // Enrollment Form
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-10 text-center">
              Enroll in the course
            </h2>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <label className="block text-base font-medium text-gray-700 mb-2">Your name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-1 focus:ring-blue-600 text-gray-700"
                  required
                  placeholder="name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base font-medium text-gray-700 mb-2">Email address</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-1 focus:ring-blue-600 text-gray-700"
                  required
                  placeholder="email"
                />
              </div>

              <div className="mb-7">
                <label className="block text-base font-medium text-gray-700 mb-2">Phone number</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-1 focus:ring-blue-600 text-gray-700"
                  required
                  placeholder="+998"
                />
              </div>

              <div className="flex justify-end gap-5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Enroll
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
