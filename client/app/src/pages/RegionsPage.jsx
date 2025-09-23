import React from 'react';
import { motion } from 'framer-motion';

const RegionsPage = () => {
  const regions = [
    { name: "North America", countries: 3, members: 287 },
    { name: "Europe", countries: 28, members: 352 },
    { name: "Asia-Pacific", countries: 18, members: 245 },
    { name: "Africa", countries: 12, members: 87 },
    { name: "Middle East", countries: 8, members: 73 },
    { name: "Latin America", countries: 9, members: 68 }
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
            IAAII Represented Regions
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Our global presence across six continents
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                <p>
                  The International Association of Artificial Intelligence and Informatics has established a strong global presence with regional chapters and representatives in countries around the world. Our regional structure enables us to address local needs while maintaining a global perspective.
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {regions.map((region, index) => (
                  <motion.div
                    key={region.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="border border-gray-200 rounded-lg p-6 hover:border-[#F47B20] hover:shadow-md transition-all duration-200"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{region.name}</h3>
                    <div className="flex justify-between text-gray-600 mb-4">
                      <span>{region.countries} countries</span>
                      <span>{region.members} members</span>
                    </div>
                    <button className="inline-flex items-center text-[#F47B20] hover:text-[#d86817] transition-colors duration-200">
                      View regional details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 bg-[#182C49]/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#182C49] mb-4">Regional Activities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Regional conferences and workshops</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>Collaboration with local institutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Regional working groups on specific topics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>Localized educational initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionsPage; 