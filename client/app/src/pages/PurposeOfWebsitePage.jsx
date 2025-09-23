import React from 'react';
import { motion } from 'framer-motion';

const PurposeOfWebsitePage = () => {
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
            Purpose of This Website
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Our mission for the IAAII online presence
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
                <p>
                  The official website of the International Association of Artificial Intelligence and Informatics (IAAII) serves as the primary digital platform for our organization, designed to advance our mission of promoting excellence in AI and informatics across the globe.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Objectives</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="mt-0"><span className="font-medium text-gray-900">Information Dissemination:</span> To provide accurate, up-to-date information about the IAAII, its mission, activities, and initiatives to members, stakeholders, and the general public.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="mt-0"><span className="font-medium text-gray-900">Member Resources:</span> To serve as a centralized repository of resources, publications, and learning materials for our members, enhancing their professional development and knowledge exchange.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="mt-0"><span className="font-medium text-gray-900">Community Building:</span> To foster a sense of community among AI and informatics professionals, facilitating networking, collaboration, and knowledge sharing.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="mt-0"><span className="font-medium text-gray-900">Public Education:</span> To educate the broader public about artificial intelligence, informatics, and related technologies, promoting ethical applications and addressing common misconceptions.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="mt-0"><span className="font-medium text-gray-900">Organizational Transparency:</span> To maintain transparency about our governance, funding, partnerships, and decision-making processes, upholding our commitment to ethical standards.</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Commitment to Accessibility and Inclusion</h3>
                <p>
                  We are committed to ensuring that our website is accessible to all users, including those with disabilities. We strive to meet international accessibility standards and welcome feedback on how we can improve user experience for everyone.
                </p>
                
                <div className="mt-10 bg-[#182C49]/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#182C49] mb-4">Feedback</h3>
                  <p>
                    We value your input on how we can improve our website to better serve our community. If you have suggestions, questions, or concerns about our website, please contact us at <span className="text-[#F47B20]">webmaster@iaaii.org</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PurposeOfWebsitePage; 