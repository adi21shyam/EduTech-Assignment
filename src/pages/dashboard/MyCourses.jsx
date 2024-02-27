import React, { useState } from "react";

const MyCourses = ({ cart, removeFromCart }) => {
  const [modalCourse, setModalCourse] = useState(null);

  const openModal = (course) => {
    setModalCourse(course);
  };

  const closeModal = () => {
    setModalCourse(null);
  };

  const removeCourse = (course) => {
    removeFromCart(course);
  };

  return (
    <div className="w-4/5 fixed right-0 overflow-y-auto">
      <div className="grid grid-cols-1 m-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cart ? (
          cart.map((course) => (
            <div key={course.id} className="bg-gray-100 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.name}</h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-700">
                  Price: <span className="font-semibold">${course.price}</span>
                </p>
                <p className="text-gray-700">
                  Tutor: <span className="font-semibold">{course.tutor}</span>
                </p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-700">
                  Duration: <span className="font-semibold">{course.duration}</span>
                </p>
                <p className="text-gray-700">
                  Rating: <span className="font-semibold">{course.rating}</span>
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button onClick={() => openModal(course)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                  View
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => removeCourse(course)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-xl font-semibold mb-2 text-gray-800">No Course is added to My Course</h1>
        )}
      </div>
      {/* Modal */}
      {modalCourse && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl transform scale-100 opacity-100 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-4">{modalCourse.name}</h2>
            <p className="text-gray-700 mb-4">{modalCourse.about}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700">
                  Price: <span className="font-semibold">${modalCourse.price}</span>
                </p>
                <p className="text-gray-700">
                  Discount: <span className="font-semibold">{modalCourse.discount}%</span>
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  Tutor: <span className="font-semibold">{modalCourse.tutor}</span>
                </p>
                <p className="text-gray-700">
                  Duration: <span className="font-semibold">{modalCourse.duration}</span>
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  Rating: <span className="font-semibold">{modalCourse.rating}</span>
                </p>
                <p className="text-gray-700">
                  Reviews: <span className="font-semibold">{modalCourse.reviews}</span>
                </p>
              </div>
            </div>
            {/* Add more details here as needed */}
            <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 block">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
