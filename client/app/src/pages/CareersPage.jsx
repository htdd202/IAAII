import React from 'react';
import { motion } from 'framer-motion';

const CareersPage = () => {
  const jobs = [
    {
      title: "Senior AI Researcher",
      organization: "Wisconsin College",
      location: "Madison, WI, USA",
      type: "Full-time",
      posted: "2 weeks ago"
    },
    {
      title: "Postdoctoral Fellow - Machine Learning",
      organization: "European AI Research Center",
      location: "Berlin, Germany",
      type: "Contract (2 years)",
      posted: "3 weeks ago"
    },
    {
      title: "AI Ethics Policy Advisor",
      organization: "IAAII Global Headquarters",
      location: "Remote",
      type: "Full-time",
      posted: "1 month ago"
    },
    {
      title: "Healthcare Informatics Specialist",
      organization: "Asia-Pacific Informatics Institute",
      location: "Singapore",
      type: "Full-time",
      posted: "2 months ago"
    }
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
            Career Opportunities
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Find your next role in AI and informatics
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="prose prose-lg max-w-none text-gray-600 mb-10">
                <p>
                  Browse current job opportunities within our member organizations. These positions represent exciting careers in artificial intelligence and informatics across academic, industry, and non-profit sectors.
                </p>
              </div>
              
              <div className="space-y-6">
                {jobs.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="border border-gray-200 rounded-lg p-6 hover:border-[#F47B20] hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <p className="text-[#F47B20] font-medium">{job.organization}</p>
                        <div className="mt-2 flex flex-wrap items-center text-gray-600 gap-x-4">
                          <span className="flex items-center">
                            <svg className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <svg className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <svg className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Posted {job.posted}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#182C49] hover:bg-[#0f1c30] transition duration-150">
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">Don't see a position that matches your skills?</p>
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#182C49] hover:bg-[#0f1c30] transition duration-150">
                  Submit General Application
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage; 