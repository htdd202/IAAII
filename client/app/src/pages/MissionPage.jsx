import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MissionPage = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Mission
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center rounded-full bg-[#182C49]/10 p-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#182C49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  IAAII's Guiding Purpose
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-center text-xl font-medium text-[#182C49] mb-8">
                  "IAAII's mission is to bring together thought leaders, innovators and practitioners from around the world to advance AI and informatics in science, education and practice through mutual learning, knowledge sharing and ethical leadership."
                </p>
                
                <p>
                  At IAAII, we are dedicated to creating a collaborative environment where experts across disciplines and geographies can come together to shape the future of artificial intelligence and informatics. Our mission drives us to:
                </p>
                
                <ul>
                  <li>Foster international cooperation across academic, industry, and governmental sectors</li>
                  <li>Promote the ethical development and application of AI technologies</li>
                  <li>Support knowledge exchange and professional development opportunities</li>
                  <li>Guide emerging standards and best practices in the field</li>
                  <li>Advocate for responsible innovation that benefits society at large</li>
                </ul>
                
                <p>
                  Through conferences, publications, working groups, and educational initiatives, we provide platforms for our global community to engage in meaningful dialogue and collaborative problem-solving.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/vision">
                    <button className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#182C49] hover:bg-[#0f1c30] transition duration-150">
                      Explore Our Vision
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionPage; 