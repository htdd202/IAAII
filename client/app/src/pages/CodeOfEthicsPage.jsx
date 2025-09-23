import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CodeOfEthicsPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

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
            Code of Ethics
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            International Association of Artificial Intelligence and Informatics (IAAII)
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
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="p-6 bg-gradient-to-r from-[#182C49]/5 to-[#F47B20]/5 rounded-xl mb-10"
                >
                  <p className="font-medium text-lg text-gray-700 italic leading-relaxed">
                    We, the members of the International Association of Artificial Intelligence and Informatics (IAAII), recognize the profound impact that artificial intelligence, informatics, and emerging technologies have on individuals, societies, and the global community. In accepting our responsibilities to the profession, our colleagues, and the communities we serve, we commit to the highest standards of ethical and professional conduct. We pledge to uphold the following principles:
                  </p>
                </motion.div>
                
                {/* Section I */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-10 border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                >
                  <div 
                    className={`flex items-center cursor-pointer p-5 ${expandedSection === 'section1' ? 'bg-[#182C49]/10' : 'hover:bg-gray-50'} transition-colors duration-200`}
                    onClick={() => toggleSection('section1')}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 flex-grow">I. Commitment to Integrity, Responsible Behavior, and Ethical Conduct</h2>
                    <svg 
                      className={`w-6 h-6 text-[#F47B20] transition-transform duration-300 ${expandedSection === 'section1' ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <motion.div
                    animate={{ 
                      height: expandedSection === 'section1' ? 'auto' : 0,
                      opacity: expandedSection === 'section1' ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50">
                      <ol className="list-decimal pl-6 space-y-6">
                        <li>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#182C49] text-lg">Public Welfare and Safety</span>
                            <p className="mt-1">
                              To hold paramount the safety, health, and welfare of the public; to comply with ethical design practices and promote sustainable development; to protect the privacy and rights of individuals; and to promptly disclose any factors that may pose risks to public safety, security, or the environment.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#182C49] text-lg">Societal Awareness</span>
                            <p className="mt-1">
                              To enhance public understanding of the capabilities, risks, and societal implications of artificial intelligence, informatics, and related technologies, ensuring transparency and accountability in their development and deployment.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#182C49] text-lg">Conflict of Interest</span>
                            <p className="mt-1">
                              To avoid real or perceived conflicts of interest whenever possible and to disclose them to relevant parties when they occur, maintaining objectivity and fairness in professional activities.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#182C49] text-lg">Legal Compliance</span>
                            <p className="mt-1">
                              To adhere to all applicable laws, regulations, and ethical standards in professional activities, and to unequivocally reject bribery, corruption, and other forms of unethical behavior.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#182C49] text-lg">Honest Communication</span>
                            <p className="mt-1">
                              To seek, accept, and provide constructive criticism of technical work; to acknowledge and correct errors promptly; to be honest and realistic in presenting data, claims, and research outcomes; and to properly credit the contributions of others.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#182C49] text-lg">Competence and Accountability</span>
                            <p className="mt-1">
                              To continuously improve technical knowledge and skills; to undertake professional tasks only when qualified by training or experience; and to disclose any limitations in competence when necessary.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Section II */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-8 border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                >
                  <div 
                    className={`flex items-center cursor-pointer p-5 ${expandedSection === 'section2' ? 'bg-[#182C49]/10' : 'hover:bg-gray-50'} transition-colors duration-200`}
                    onClick={() => toggleSection('section2')}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 flex-grow">II. Commitment to Fairness, Respect, and Non-Discrimination</h2>
                    <svg 
                      className={`w-6 h-6 text-[#F47B20] transition-transform duration-300 ${expandedSection === 'section2' ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <motion.div
                    animate={{ 
                      height: expandedSection === 'section2' ? 'auto' : 0,
                      opacity: expandedSection === 'section2' ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50">
                      <ol className="list-decimal pl-6 space-y-6" start="7">
                        <li>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#182C49] text-lg">Respect for All Individuals</span>
                            <p className="mt-1">
                              To treat all persons with fairness, dignity, and respect, avoiding discrimination based on race, religion, gender, disability, age, national origin, sexual orientation, gender identity, or any other characteristic.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#182C49] text-lg">Zero Tolerance for Harassment</span>
                            <p className="mt-1">
                              To create and maintain environments free from harassment, including sexual harassment, bullying, or any other form of abusive behavior, fostering a culture of inclusivity and respect.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#182C49] text-lg">Protection from Harm</span>
                            <p className="mt-1">
                              To avoid actions that may cause harm to others, including harm to their property, reputation, or professional standing, whether through false statements, malicious intent, or negligent behavior.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Section III */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-8 border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                >
                  <div 
                    className={`flex items-center cursor-pointer p-5 ${expandedSection === 'section3' ? 'bg-[#182C49]/10' : 'hover:bg-gray-50'} transition-colors duration-200`}
                    onClick={() => toggleSection('section3')}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 flex-grow">III. Commitment to Upholding and Promoting Ethical Standards</h2>
                    <svg 
                      className={`w-6 h-6 text-[#F47B20] transition-transform duration-300 ${expandedSection === 'section3' ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <motion.div
                    animate={{ 
                      height: expandedSection === 'section3' ? 'auto' : 0,
                      opacity: expandedSection === 'section3' ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50">
                      <ol className="list-decimal pl-6 space-y-6" start="10">
                        <li>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#182C49] text-lg">Support for Ethical Conduct</span>
                            <p className="mt-1">
                              To support and encourage colleagues and co-workers in adhering to this Code of Ethics; to report unethical practices when observed; and to refrain from retaliating against individuals who report violations in good faith.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Governance and Revisions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="mt-12 border border-gray-200 rounded-xl overflow-hidden shadow-md"
                >
                  <div className="bg-gradient-to-r from-[#182C49]/5 to-transparent p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Governance and Revisions
                    </h2>
                    <p className="mb-4 text-gray-700">
                      The IAAII Code of Ethics is a living document, subject to periodic review to reflect evolving technologies, societal expectations, and ethical challenges. Changes to this Code will be made following a transparent process, including:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li>Publication of proposed changes for member feedback at least three (3) months prior to final consideration.</li>
                      <li>Opportunities for discussion by relevant committees and member organizations.</li>
                      <li>Approval of changes through a two-thirds majority vote by the IAAII Board of Directors, provided a quorum is present.</li>
                    </ul>
                  </div>
                  
                  <div className="py-6 px-8 bg-[#182C49]/5 border-t border-gray-200">
                    <div className="flex items-center justify-center">
                      <div className="mr-4">
                        <svg className="w-12 h-12 text-[#182C49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-[#182C49]">
                          Adopted by the IAAII Board of Directors
                        </p>
                        <p className="text-gray-600">
                          Effective January 1, 2025, with future revisions as approved by the Board.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mt-12 text-center"
                >
                  <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-[#182C49] to-[#F47B20]">
                    <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#182C49] hover:bg-[#182C49]/90 transition duration-150">
                      Commit to Our Code of Ethics
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
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

export default CodeOfEthicsPage; 