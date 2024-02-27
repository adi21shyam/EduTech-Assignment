import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Image1 from "../assets/PersonalizedLearning.webp"
import Image2 from "../assets/RealTime.webp"
import Image3 from "../assets/InteractiveCources.webp"

const FeaturePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.25, // Adjust threshold as needed
  });

  const animatedProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.5)',
    config: { duration: 500 },
  });

  return (
    <section ref={ref} className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <animated.div style={animatedProps} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src={Image1}
              alt="Feature 1 Icon"
              className="h-full w-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Personalized Learning</h3>
            <p className="text-gray-700 text-center">
              Tailored learning experiences to meet individual student needs.
            </p>
          </animated.div>
          {/* Feature 2 */}
          <animated.div style={animatedProps} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src={Image2}
              alt="Feature 2 Icon"
              className="h-full w-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Interactive Courses</h3>
            <p className="text-gray-700 text-center">
              Engaging courses with interactive lessons and multimedia content.
            </p>
          </animated.div>
          {/* Feature 3 */}
          <animated.div style={animatedProps} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src={Image3}
              alt="Feature 3 Icon"
              className="h-full w-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-gray-700 text-center">
              Track progress and performance with comprehensive analytics tools.
            </p>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePage;
