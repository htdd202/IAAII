import React from 'react';
import { motion } from 'framer-motion';

const EditorialBoardPage = () => {
  const editors = [
    {
      name: "Dr. Sarah Johnson",
      title: "Editor-in-Chief",
      affiliation: "Wisconsin College, USA",
      specialization: "Machine Learning & Neural Networks"
    },
    {
      name: "Prof. Michael Chen",
      title: "Associate Editor",
      affiliation: "Stanford University, USA",
      specialization: "Computer Vision & Pattern Recognition"
    },
    {
      name: "Dr. Ana Garcia",
      title: "Associate Editor",
      affiliation: "University of Barcelona, Spain",
      specialization: "Natural Language Processing"
    },
    {
      name: "Prof. Hiroshi Tanaka",
      title: "Associate Editor",
      affiliation: "Tokyo Institute of Technology, Japan",
      specialization: "Robotics & Autonomous Systems"
    },
    {
      name: "Dr. Elizabeth Morris",
      title: "Associate Editor",
      affiliation: "University of Oxford, UK",
      specialization: "AI Ethics & Governance"
    },
    {
      name: "Prof. Raj Patel",
      title: "Associate Editor",
      affiliation: "Indian Institute of Technology, India",
      specialization: "Knowledge Representation & Reasoning"
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
            Editorial Board
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Our distinguished editorial board comprises leading experts in AI and informatics from around the world
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {editors.map((editor, index) => (
            <motion.div 
              key={editor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden p-6"
            >
              <div className="h-16 w-16 rounded-full bg-[#182C49]/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#182C49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-1">{editor.name}</h3>
              <p className="text-[#F47B20] text-center font-medium mb-2">{editor.title}</p>
              <p className="text-gray-600 text-center mb-1">{editor.affiliation}</p>
              <p className="text-gray-500 text-sm text-center">{editor.specialization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorialBoardPage; 