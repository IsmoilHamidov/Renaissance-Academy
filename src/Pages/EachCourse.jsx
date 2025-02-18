import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Courses } from "../constants/course";
import Modal from "../Hook/ModalHook";

function EachCourse() {
    const { id } = useParams();
    const course = Courses.find((c) => c.id === Number(id));
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    if (!course) {
      return (
        <h2 className="text-center text-xl font-semibold mt-10">
          Course not found!
        </h2>
      );
    }
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="min-h-screen p-6">
        <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="w-full">
            <img
              src={course.Img}
              alt={course.text}
              className="w-full h-[400px] object-cover rounded-t-3xl shadow-lg transform hover:scale-105 transition-all duration-300"
            />
          </div>
  
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{course.text}</h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">{course.description}</p>
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="mb-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-5">
                    👨‍🏫 Instructor:
                  </h2>
                  <div className="flex items-center gap-4">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-14 h-14 rounded-full border-2 border-blue-600"
                    />
                    <div>
                      <p className="text-gray-800 font-medium">{course.instructor.name}</p>
                      <p className="text-gray-600 text-sm">{course.instructor.bio}</p>
                    </div>
                  </div>
                </div>
  
                <div className="mb-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">📆 Duration:</h2>
                  <p className="text-gray-600">{course.duration}</p>
                </div>
  
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">⭐ Rating:</h2>
                  <p className="text-gray-600">
                    {course.rating} ({course.reviews} reviews)
                  </p>
                </div>
  
                {/* Price Section */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">💰 Price:</h2>
                  <p className="text-gray-600">{course.price}</p>
                </div>
              </div>
  
              <div>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">🔑 Key Features:</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {course.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
  
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">📚 Learning Process:</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {course.process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="mt-8">
              <button
                onClick={handleOpenModal}
                className="w-full lg:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-600 transition duration-300"
              >
                Enroll in the Course
              </button>
            </div>
          </div>
        </div>
  
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    );
}

export default EachCourse;
