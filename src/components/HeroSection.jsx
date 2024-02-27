import React from 'react';
import HeroImage from "../assets/HeroImage.jpg"
import HeroImage2 from "../assets/HeroImage2.jpg"


const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
          Welcome to EduTech+
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center mb-8">
          Transforming education with innovative technology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2">
          {/* Quote 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <blockquote className="italic text-gray-800 mb-4">
              "Education is the most powerful weapon which you can use to change the world."
            </blockquote>
            <p className="font-semibold">- Nelson Mandela</p>
          </div>
          {/* Quote 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <blockquote className="italic text-gray-800 mb-4">
              "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education."
            </blockquote>
            <p className="font-semibold">- Martin Luther King Jr.</p>
          </div>
          {/* Quote 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <blockquote className="italic text-gray-800 mb-4">
              "Education is not preparation for life; education is life itself."
            </blockquote>
            <p className="font-semibold">- John Dewey</p>
          </div>
        </div>
        <div className='flex gap-5'>
        {/* Image */}

        <img
          src={HeroImage}
          alt="Hero Image"
          className="mt-8 rounded-lg shadow-xl max-w-80"
        />
        <img
          src={HeroImage2}
          alt="Hero Image"
          className="mt-8 rounded-lg shadow-xl max-w-80"
        />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
