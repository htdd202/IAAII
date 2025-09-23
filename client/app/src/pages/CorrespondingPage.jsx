import React from 'react';
import { motion } from 'framer-motion';

const CorrespondingPage = () => {
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
            Corresponding Members
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Our network of institutional representatives
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
                  Corresponding Members serve as official representatives of their institutions within the IAAII community. These members play a crucial role in facilitating collaboration between their organizations and the broader IAAII network.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Role of Corresponding Members</h3>
                <p>
                  Corresponding Members are responsible for:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Serving as the primary point of contact between their institution and IAAII</li>
                  <li>Disseminating IAAII announcements and opportunities within their organization</li>
                  <li>Representing their institution's interests and expertise in IAAII forums</li>
                  <li>Facilitating collaborative research and educational initiatives</li>
                  <li>Participating in relevant working groups and committees</li>
                </ul>
                
                <div className="mt-10 bg-[#182C49]/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#182C49] mb-4">Become a Corresponding Member</h3>
                  <p className="mb-4">
                    If your institution would like to establish a formal relationship with IAAII through a Corresponding Member, please contact our Membership Office for more information.
                  </p>
                  <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#182C49] hover:bg-[#0f1c30] transition duration-150">
                    Contact Membership Office
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CorrespondingPage; 