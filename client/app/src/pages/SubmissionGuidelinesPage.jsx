import React from 'react';
import { motion } from 'framer-motion';

const SubmissionGuidelinesPage = () => {
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
            Submission Guidelines
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Information for authors interested in submitting manuscripts to the Journal of AI and Informatics
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
                <p>
                  The Journal of AI and Informatics welcomes original research articles, review papers, case studies, and technical reports in all areas of artificial intelligence and informatics. All submissions undergo rigorous peer review to ensure the highest standards of scholarly publication.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Manuscript Types</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Research Articles:</strong> Original research that presents significant new findings (5,000-8,000 words)</li>
                  <li><strong>Review Articles:</strong> Comprehensive reviews of existing research (6,000-10,000 words)</li>
                  <li><strong>Case Studies:</strong> Detailed analyses of specific AI applications (3,000-5,000 words)</li>
                  <li><strong>Technical Reports:</strong> Descriptions of novel algorithms, systems, or methods (3,000-6,000 words)</li>
                  <li><strong>Perspectives:</strong> Opinion pieces on emerging trends or issues (1,500-3,000 words)</li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Manuscript Format</h3>
                <p>
                  Manuscripts should be submitted in Microsoft Word or LaTeX format. Templates are available for download from our website. All submissions must include:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Title page with author names, affiliations, and contact information</li>
                  <li>Abstract (200-300 words)</li>
                  <li>Keywords (4-6)</li>
                  <li>Main text (properly structured with headings and subheadings)</li>
                  <li>References (IEEE format)</li>
                  <li>Figures and tables with captions</li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Submission Process</h3>
                <p>
                  All manuscripts must be submitted through our online submission system. Authors will need to create an account and follow the step-by-step submission process. The typical review process takes 8-12 weeks.
                </p>
                
                <div className="mt-10 bg-[#182C49]/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#182C49] mb-4">Important Notes</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>All submissions must represent original work that has not been published elsewhere</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Authors are responsible for obtaining permission to reproduce any copyrighted material</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-[#F47B20] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>The journal follows a double-blind peer review process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubmissionGuidelinesPage; 