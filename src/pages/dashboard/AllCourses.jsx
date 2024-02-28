import React, { useState } from 'react';
import  coursesData  from '../../data/data.json';

const AllCourses = ({ addToCart }) => {
  const [courses, setCourses] = useState(coursesData.slice(0, 6)); // Initially, display first 6 courses
  const [visibleCourses, setVisibleCourses] = useState(6); // Number of initially visible courses
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreCourses = () => {
    setIsLoading(true);
    setTimeout(() => {
      const nextCourses = coursesData.slice(visibleCourses, visibleCourses + 6);
      setCourses(prevCourses => [...prevCourses, ...nextCourses]);
      setVisibleCourses(prevCount => prevCount + 6);
      setIsLoading(false);
    }, 1000); // Simulating loading delay
  };

  const handleAddToCart = (course) => {
    addToCart(course);
  };

  return (
    <div className='h-full w-4/5 right-0 overflow-y-auto absolute'>
    <div className="grid grid-cols-1 m-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
      {courses.map(course => (
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
  <button
    onClick={() => handleAddToCart(course)}
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 block w-full"
  >
    Add to Cart
  </button>
</div>

      ))}
      <div className='flex align-middle justify-center items-center'>
      {isLoading ? (
        <p className="text-gray-700 text-center col-span-3">Loading...</p>
      ) : courses.length<(visibleCourses+1) && courses.length<8  && (
        <button
          onClick={loadMoreCourses}
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 mx-auto"
        >
          Load More Courses
        </button>
      )}
      </div>
    </div>
    </div>
  );
};

export default AllCourses;
