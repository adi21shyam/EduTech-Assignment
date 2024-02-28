import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 px-4">
          <img src="/about-image.jpg" alt="About Us" className="rounded-lg shadow-lg mb-4"/>
        </div>
        
        <div className="md:w-1/2 px-4">
          <p className="text-lg text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus in tortor varius aliquam. Quisque ultricies feugiat justo, vel laoreet ex sollicitudin non.
          </p>
          
          <p className="text-lg text-gray-800 mb-4">
            Nullam interdum velit et purus hendrerit, id commodo elit posuere. Vestibulum sit amet efficitur ex, sit amet suscipit lorem. Proin pharetra gravida purus, nec sollicitudin turpis ullamcorper id.
          </p>
          
          <p className="text-lg text-gray-800 mb-4">
            Integer et accumsan purus, id sodales nisi. Aenean feugiat, velit non eleifend scelerisque, dolor eros convallis magna, nec ultricies lectus sem vel felis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
