import React, { useState } from 'react';
import Sidebar from './Sidebar';
import AllCourses from './AllCourses';
import MyCourses from './MyCourses';
import { toast } from "react-toastify";
import Greeting from './Greeting';
import Analytics from './Analytics';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('allCourses');
  const [cart, setCart] = useState([]);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  const addToCart = (course) => {
    setCart(prevCart => [...prevCart, course]);
    toast.success("Course Added to My Courses")
  };
  const removeFromCart = (course)=>{
    const item = cart.filter((item)=> item.name != course.name);
    setCart(item);
    toast.error("Course deleted from cart")
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar onComponentChange={handleComponentChange} />
      <div className="flex-grow p-4 md:p-8">
        {activeComponent === 'allCourses' && <AllCourses addToCart={addToCart} />}
        {activeComponent === 'myCourses' && <MyCourses cart={cart} removeFromCart={removeFromCart}/>}
        {activeComponent === 'greeting' && <Greeting />}
        {activeComponent === 'analytics' && <Analytics />}
      </div>
    </div>
  );
};

export default Dashboard;
