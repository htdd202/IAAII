import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PurposeGoalsPage = () => {
  const objectives = [
    "Promote the development and ethical application of AI and informatics in various sectors.",
    "Promote international cooperation to address global challenges through AI-enabled solutions.",
    "Stimulate cutting-edge research, development and real-world applications of AI technologies.",
    "Bridge the gap between theoretical research and practical implementation in different industries.",
    "Facilitate the dissemination and exchange of knowledge, resources and technological advances.",
    "Advocate for responsible AI practices, data privacy and ethical innovation.",
    "Represent the AI and informatics community in international forums and collaborate with professional and governmental organizations."
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
            Purpose & Goals
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            The IAAII plays an important role in the global AI and informatics landscape with the following core objectives:
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="prose prose-lg max-w-none text-gray-600">
                <div className="bg-[#182C49]/5 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold text-[#182C49] mb-4">Core Objectives</h2>
                  
                  <ul className="space-y-4">
                    {objectives.map((objective, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                        className="flex items-start"
                      >
                        <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{objective}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Driving Progress in AI and Informatics
                </h3>
                
                <p>
                  At IAAII, we believe that artificial intelligence and informatics have tremendous potential to address some of the world's most pressing challenges. Our purpose is to ensure that these technologies are developed and applied in ways that are ethical, responsible, and beneficial to humanity.
                </p>
                
                <p>
                  By bringing together diverse stakeholders—from academic researchers and industry professionals to policymakers and the broader public—we create spaces for collaborative problem-solving and innovation that transcends traditional boundaries.
                </p>
                
                <p>
                  Our goals are ambitious but achievable through collective action. We envision a future where AI and informatics contribute to a more equitable, sustainable, and prosperous global society.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/global-role">
                    <button className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#182C49] hover:bg-[#0f1c30] transition duration-150">
                      Learn About Our Global Role
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

export default PurposeGoalsPage; 