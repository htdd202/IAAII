import React from 'react';
import { motion } from 'framer-motion';

const DisclaimerPage = () => {
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
            Disclaimer
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Important information about the use of this website
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">General Disclaimer</h2>
                <p>
                  The information contained on the International Association of Artificial Intelligence and Informatics (IAAII) website is provided for general informational purposes only. All information on this website is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the website.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">No Liability</h3>
                <p>
                  Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the website or reliance on any information provided on the website. Your use of the website and your reliance on any information on the website is solely at your own risk.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">External Links</h3>
                <p>
                  The website may contain links to external websites that are not provided or maintained by or in any way affiliated with IAAII. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Errors and Omissions</h3>
                <p>
                  While we strive to keep the information on the website updated and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
                </p>
                
                <div className="mt-10 bg-[#182C49]/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#182C49] mb-4">Contact Us</h3>
                  <p>
                    If you have any questions or concerns about this disclaimer, please contact us at <span className="text-[#F47B20]">legal@iaaii.org</span>.
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

export default DisclaimerPage; 