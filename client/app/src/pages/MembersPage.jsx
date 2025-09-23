import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MembersPage = () => {
  const whyJoinReasons = [
    { text: 'Global Network: Connect with AI professionals, researchers, and policymakers worldwide.' },
    { text: 'Exclusive Resources: Access to cutting-edge journals, white papers, and AI research repositories.' },
    { text: 'Discounted Events: Reduced fees for conferences, workshops, and webinars.' },
    { text: 'Professional Growth: Participate in specialized training programs, certification courses, and leadership opportunities.' }
  ];

  const membershipCategories = [
    {
      title: 'Individual Membership',
      price: 'Free until May 1, 2025 — No renewal fees required.',
      eligibility: 'Open to professionals, academics, and enthusiasts in AI and informatics.',
      benefits: 'Full access to resources, networking forums, and voting rights in IAAII elections.'
    },
    {
      title: 'Student Membership',
      price: 'Free with proof of enrollment.',
      eligibility: 'Designed for undergraduate and graduate students pursuing AI or related fields.',
      benefits: 'Mentorship programs, internship opportunities, and career guidance.'
    },
    {
      title: 'Academic Institutional Membership',
      eligibility: 'Ideal for universities, research centers, and educational institutions.',
      benefits: 'Recognition on IAAII platforms, collaborative research opportunities, and access to educational resources.'
    },
    {
      title: 'Corporate Membership',
      eligibility: 'Tailored for companies and organizations in the AI and informatics sectors.',
      benefits: 'Branding opportunities, partnerships, and priority participation in IAAII events.'
    }
  ];

  const joinSteps = [
    { number: '1', text: 'Complete the Membership Application Form.' },
    { number: '2', text: 'Submit required documents (if applicable).' },
    { number: '3', text: 'Receive confirmation and start enjoying your benefits immediately.' }
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
            IAAII Membership
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Join the International Association of Artificial Intelligence and Informatics (IAAII)
          </p>
        </motion.div>
        
        {/* Introduction Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-[#182C49] to-[#182C49]/90 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-12">
              <p className="text-xl sm:text-2xl font-medium text-white text-center">
                Be part of a dynamic global community driving innovation, ethical practices, and transformative solutions in AI and informatics.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Why Join Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <svg className="w-8 h-8 mr-3 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Why Join IAAII?
              </h2>
              
              <div className="space-y-4">
                {whyJoinReasons.map((reason, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                    className="flex items-start"
                  >
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-lg text-gray-700">{reason.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Membership Categories */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Membership Categories</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {membershipCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-[#182C49]/5 to-transparent p-6 border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  {category.price && (
                    <p className="mt-2 text-lg font-medium text-[#F47B20]">{category.price}</p>
                  )}
                </div>
                <div className="p-6">
                  <p className="mb-4 flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{category.eligibility}</span>
                  </p>
                  <p className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span><strong>Benefits:</strong> {category.benefits}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* How to Join */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <svg className="w-8 h-8 mr-3 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                How to Join
              </h2>
              
              <div className="space-y-6">
                {joinSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + (index * 0.1), duration: 0.5 }}
                    className="flex items-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#182C49] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <p className="ml-4 text-lg text-gray-700">{step.text}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 bg-[#182C49]/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#182C49] mb-4">Membership Renewal</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No renewal fees required for any membership category.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automatic renewal with an option to update your details annually.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <Link to="/membership-application">
              <motion.div 
                className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-[#182C49] to-[#F47B20]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-[#182C49] hover:bg-[#182C49]/90 transition duration-150">
                  Apply for Membership
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MembersPage;