import React from 'react';
import { motion } from 'framer-motion';

const AboutCollegePage = () => {
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
            About Wisconsin College
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            A cornerstone of academic excellence and innovation
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="prose prose-lg max-w-none text-gray-600">
                {/* Introduction with animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="p-6 bg-gradient-to-r from-[#182C49]/5 to-[#F47B20]/5 rounded-xl">
                    <p className="font-medium text-lg text-gray-700 leading-relaxed">
                      Wisconsin College is a cornerstone of academic excellence and innovation and has fostered leadership in a variety of disciplines since its founding. Recognized for its commitment to advancing knowledge, research and professional development, the College has played a critical role in educating future leaders and contributing to global educational standards.
                    </p>
                  </div>
                </motion.div>
                
                {/* History and Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mb-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Our Vision and Founding Principles
                  </h2>
                  <p className="mb-4">
                    Founded with a vision to foster intellectual growth and societal progress, Wisconsin College emphasizes interdisciplinary collaboration, critical thinking, and the pursuit of knowledge that addresses real-world challenges. The College's dynamic environment supports a culture of academic rigor, ethical integrity, and continuous learning.
                  </p>
                </motion.div>
                
                {/* IAAII Connection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="mb-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Formation of IAAII
                  </h2>
                  <div className="bg-[#182C49]/5 p-6 rounded-lg border-l-4 border-[#F47B20]">
                    <p className="mb-0">
                      In 2016, Wisconsin College took an important step by supporting the formation of the International Association of Artificial Intelligence and Informatics (IAAII). This initiative reflects the College's commitment to supporting emerging fields that have a transformative impact on society. Through this association, Wisconsin College continues to influence the development of health sciences, social sciences, artificial intelligence, informatics, and related technologies on a global scale.
                    </p>
                  </div>
                </motion.div>
                
                {/* Global Impact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="mb-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Global Impact and Partnerships
                  </h2>
                  <p className="mb-0">
                    Wisconsin College faculty, alumni, and affiliated organizations actively contribute to research, policy development, and advances in education. The College fosters partnerships with governmental and non-governmental organizations and provides expertise and innovative solutions to current issues.
                  </p>
                </motion.div>
                
                {/* Conclusion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="mt-12 text-center"
                >
                  <div className="p-6 bg-gradient-to-r from-[#182C49]/10 to-[#F47B20]/10 rounded-xl">
                    <p className="font-semibold text-lg text-gray-800 italic">
                      Wisconsin College is a beacon of academic distinction and a catalyst for positive change in the global community and is committed to inspiring leaders and promoting best practices.
                    </p>
                  </div>
                  
                  <div className="mt-10">
                    <motion.div 
                      className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-[#182C49] to-[#F47B20]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#182C49] hover:bg-[#182C49]/90 transition duration-150">
                        Learn More About Our Programs
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCollegePage;