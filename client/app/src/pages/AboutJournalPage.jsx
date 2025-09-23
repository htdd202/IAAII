import React from 'react';
import { motion } from 'framer-motion';

const AboutJournalPage = () => {
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
            About the Journal
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            The Journal of AI and Informatics: A Premier Academic Publication
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
                  The Journal of AI and Informatics is the official publication of the International Association of Artificial Intelligence and Informatics (IAAII), established in 2016 to advance research and application in these rapidly evolving fields.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Journal Scope</h3>
                <p>
                  Our peer-reviewed journal publishes original research, reviews, and perspectives on all aspects of artificial intelligence and informatics, with a particular focus on:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Machine learning algorithms and applications</li>
                  <li>Natural language processing and computational linguistics</li>
                  <li>Computer vision and pattern recognition</li>
                  <li>Knowledge representation and reasoning</li>
                  <li>AI ethics, fairness, and transparency</li>
                  <li>Healthcare and biomedical informatics</li>
                  <li>Robotics and autonomous systems</li>
                  <li>Data science and big data analytics</li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Publication Details</h3>
                <p>
                  The Journal of AI and Informatics is published quarterly and maintains rigorous peer-review standards to ensure the highest quality of published research. We are committed to timely review processes and rapid dissemination of important findings to the global research community.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Indexing</h3>
                <p>
                  The journal is indexed in major academic databases including Scopus, Web of Science, ACM Digital Library, IEEE Xplore, and Google Scholar, ensuring maximum visibility for published works.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutJournalPage; 