import React, { useState } from 'react';

const Sidebar = ({ onComponentChange }) => {
  const [activeComponent, setActiveComponent] = useState('allCourses');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    onComponentChange(component);
  };

  return (
    <div className="bg-gray-800 text-white h-full w-1/5 fixed left-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <button
              onClick={() => handleButtonClick('allCourses')}
              className={`block text-lg focus:outline-none ${activeComponent === 'allCourses' ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
            >
              All Courses
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleButtonClick('myCourses')}
              className={`block text-lg focus:outline-none ${activeComponent === 'myCourses' ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
            >
              My Courses
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleButtonClick('greetings')}
              className={`block text-lg focus:outline-none ${activeComponent === 'greetings' ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
            >
              Greetings
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleButtonClick('analytics')}
              className={`block text-lg focus:outline-none ${activeComponent === 'analytics' ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
            >
              Analytics
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
