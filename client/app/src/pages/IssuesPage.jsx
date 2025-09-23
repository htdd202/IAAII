import React from 'react';
import { motion } from 'framer-motion';

const IssuesPage = () => {
  const issues = [
    {
      id: "Vol. 7, Issue 2",
      date: "June 2023",
      topic: "Explainable AI: Methods and Applications",
      papers: 12
    },
    {
      id: "Vol. 7, Issue 1",
      date: "March 2023",
      topic: "AI in Healthcare: Recent Advances",
      papers: 14
    },
    {
      id: "Vol. 6, Issue 4",
      date: "December 2022",
      topic: "Natural Language Processing and Knowledge Graphs",
      papers: 10
    },
    {
      id: "Vol. 6, Issue 3",
      date: "September 2022",
      topic: "Ethical Considerations in AI Deployment",
      papers: 13
    },
    {
      id: "Vol. 6, Issue 2",
      date: "June 2022",
      topic: "Machine Learning for Climate Change",
      papers: 11
    },
    {
      id: "Vol. 6, Issue 1",
      date: "March 2022",
      topic: "Computer Vision and Pattern Recognition",
      papers: 15
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
            Journal Issues
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Browse our collection of previously published journal issues
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                {issues.map((issue, index) => (
                  <motion.div 
                    key={issue.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#182C49]/10 text-[#182C49] mb-3">
                      {issue.id}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{issue.topic}</h3>
                    <div className="flex justify-between text-gray-600 mb-4">
                      <span>Published: {issue.date}</span>
                      <span>{issue.papers} papers</span>
                    </div>
                    <button className="inline-flex items-center text-[#F47B20] hover:text-[#d86817] transition-colors duration-200">
                      View issue details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Looking for older issues?</h3>
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#182C49] hover:bg-[#0f1c30] transition duration-150">
                  Access Our Complete Archive
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
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

export default IssuesPage; 