import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VisionPage = () => {
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
            Our Vision
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Vision for the Future
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-center text-xl font-medium text-[#182C49] mb-8">
                  "IAAII envisions a world where AI and informatics drive equitable, transparent and transformative solutions that promote global well-being and sustainable development."
                </p>
                
                <p>
                  Our vision statement articulates the transformative future we are working to create. We believe in a world where:
                </p>
                
                <ul>
                  <li><strong>Equitable Access:</strong> AI benefits are widely shared across societies, economies, and generations</li>
                  <li><strong>Transparency:</strong> AI systems are understandable, explainable, and accountable</li>
                  <li><strong>Transformation:</strong> AI drives positive change across healthcare, education, environment, and other domains</li>
                  <li><strong>Global Well-being:</strong> AI technologies prioritize human welfare and dignity</li>
                  <li><strong>Sustainability:</strong> AI advances support long-term ecological and social balance</li>
                </ul>
                
                <p>
                  This vision guides all our initiatives, partnerships, and advocacy efforts. We recognize that achieving this future requires collaborative action across disciplines, sectors, and borders.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/strategic-goals">
                    <button className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#182C49] hover:bg-[#0f1c30] transition duration-150">
                      Explore Our Strategic Goals
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

export default VisionPage; 