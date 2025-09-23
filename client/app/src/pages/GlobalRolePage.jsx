import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GlobalRolePage = () => {
  const roles = [
    "Bring together academic researchers, industry professionals and policy makers to promote the practical application of AI.",
    "Lead the global AI and informatics community into the future and address new challenges and opportunities.",
    "Promote interdisciplinary knowledge sharing to support diversity of thought and innovation.",
    "Serve as a catalyst for the development of robust AI ecosystems that support ethical, responsible and impactful solutions worldwide."
  ];

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
            Global Role
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            In its role as a leading global association, the IAAII strives to:
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-50 px-3 text-lg font-medium text-gray-900">Our Global Impact</span>
            </div>
          </div>
          
          <div className="mt-12 grid gap-10">
            {roles.map((role, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-8 sm:flex items-center">
                  <div className="flex-shrink-0 sm:mr-8 mb-4 sm:mb-0 flex justify-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#182C49] text-white text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg">{role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 bg-gradient-to-br from-[#182C49] to-[#253F69] rounded-xl shadow-lg overflow-hidden text-white"
          >
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold mb-4">A Catalyst for Global Transformation</h3>
              <p className="text-gray-200 mb-6">
                As artificial intelligence and informatics continue to evolve at an unprecedented pace, the IAAII serves as a stabilizing force, promoting thoughtful development and deployment of these powerful technologies.
              </p>
              <p className="text-gray-200">
                By convening diverse stakeholders, establishing ethical frameworks, and fostering international collaboration, we help ensure that AI advances serve humanity's best interests while addressing global challenges.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/code-of-ethics">
                  <button className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#182C49] bg-white hover:bg-gray-100 transition duration-150">
                    View Our Code of Ethics
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GlobalRolePage; 