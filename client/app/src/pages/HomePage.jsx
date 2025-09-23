import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About IAAII Section */}
      <IaaiiSection />
      
      {/* Vision & Mission Section */}
      <VisionMissionSection />
      
      {/* Strategic Goals Section */}
      <StrategicGoalsSection />
      
      {/* Purpose & Objectives Section */}
      <PurposeSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#182C49] to-[#253F69] overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute right-0 top-0 h-full w-full text-white/5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0M0 0L40 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#grid)" />
        </svg>
        
        <div className="absolute bottom-0 right-0 -translate-y-1/2 translate-x-1/4">
          <motion.div
            className="w-96 h-96 rounded-full bg-[#F47B20]/20 filter blur-3xl"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3], 
              scale: [0.8, 1.2, 0.8],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2">
          <motion.div
            className="w-72 h-72 rounded-full bg-blue-500/20 filter blur-3xl"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2], 
              scale: [0.8, 1.1, 0.8],
              x: [0, -20, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div 
          className="text-center sm:text-left lg:w-2/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">International Association of</span>
            <span className="block text-[#F47B20]">Artificial Intelligence & Informatics</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto sm:mx-0 text-xl text-gray-300 sm:max-w-3xl">
            Advancing AI and informatics in science, education, and practice through mutual learning, knowledge sharing, and ethical leadership.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Button className="px-8 py-3 text-lg">Join IAAII</Button>
            <button className="rounded-md border border-transparent bg-white/10 px-8 py-3 text-base font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#182C49]">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// About IAAII Section Component
const IaaiiSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="lg:grid lg:grid-cols-2 lg:gap-12"
        >
          <motion.div variants={itemVariants} className="mb-12 lg:mb-0">
            <div className="inline-flex items-center justify-center rounded-xl bg-[#182C49]/10 p-2 mb-6">
              <span className="text-[#182C49] font-medium px-3 py-0.5">Est. 2016</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The International Association of AI and Informatics</h2>
            <div className="mt-6 flex">
              <div className="h-1 w-24 bg-[#F47B20] rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
            <p>
              The IAAII is an independent organization founded in 2016 by decree of Wisconsin College to meet the growing need for global AI and informatics standards. It promotes innovation, education and ethical practices in the field of artificial intelligence and informatics worldwide.
            </p>
            <p>
              The association plays a central role in fostering the global collaboration necessary to harness the potential of AI for society. The IAAII acts as a hub for interdisciplinary collaboration, connecting researchers, practitioners and policy makers.
            </p>
            <p>
              The headquarters are located on the Wisconsin College Campus in the USA. The working language of IAAII is English.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Vision & Mission Section
const VisionMissionSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vision & Mission</h2>
          <p className="mt-4 text-lg text-gray-600">Guiding principles behind our global initiatives</p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-[#F47B20]"></div>
            <div className="p-8">
              <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#F47B20]/10 mb-6 mx-auto">
                <svg className="h-8 w-8 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                IAAII envisions a world where AI and informatics drive equitable, transparent and transformative solutions that promote global well-being and sustainable development.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-[#182C49]"></div>
            <div className="p-8">
              <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#182C49]/10 mb-6 mx-auto">
                <svg className="h-8 w-8 text-[#182C49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
          </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                IAAII's mission is to bring together thought leaders, innovators and practitioners from around the world to advance AI and informatics in science, education and practice through mutual learning, knowledge sharing and ethical leadership.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Strategic Goals Section
const StrategicGoalsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const goals = [
    {
      title: "Advocacy",
      description: "Promote the ethical use and growth of AI and Informatics in the professional, academic, and government sectors.",
      icon: (
        <svg className="h-6 w-6 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "Promote interdisciplinary collaboration across geographic boundaries and support the sharing of knowledge, best practices, and technological innovations.",
      icon: (
        <svg className="h-6 w-6 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Membership",
      description: "Strengthen opportunities for participation and engagement across all membership categories, including students, professionals and institutions.",
      icon: (
        <svg className="h-6 w-6 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Academic Excellence",
      description: "Support research, education, and the dissemination of knowledge to prepare the next generation of AI and informatics professionals.",
      icon: (
        <svg className="h-6 w-6 text-[#F47B20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#182C49]/5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Strategic Goals</h2>
          <p className="mt-4 text-lg text-gray-600">
            The IAAII aims to fulfill its mission and realize its vision through these strategic pillars
          </p>
                  </div>
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-4"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F47B20]/10 mb-6">
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{goal.title}</h3>
                <p className="mt-4 text-base text-gray-600">{goal.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Purpose & Objectives Section
const PurposeSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const objectives = [
    "Promote the development and ethical application of AI and informatics in various sectors.",
    "Promote international cooperation to address global challenges through AI-enabled solutions.",
    "Stimulate cutting-edge research, development and real-world applications of AI technologies.",
    "Bridge the gap between theoretical research and practical implementation in different industries.",
    "Facilitate the dissemination and exchange of knowledge, resources and technological advances.",
    "Advocate for responsible AI practices, data privacy and ethical innovation.",
    "Represent the AI and informatics community in international forums and collaborate with professional and governmental organizations."
  ];

  const roles = [
    "Bring together academic researchers, industry professionals and policy makers to promote the practical application of AI.",
    "Lead the global AI and informatics community into the future and address new challenges and opportunities.",
    "Promote interdisciplinary knowledge sharing to support diversity of thought and innovation.",
    "Serve as a catalyst for the development of robust AI ecosystems that support ethical, responsible and impactful solutions worldwide."
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Purpose, Goals and Objectives</h2>
            <p className="mt-4 text-lg text-gray-600">
              The IAAII plays an important role in the global AI and informatics landscape with the following core objectives:
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Objectives</h3>
              <ul className="space-y-4">
                {objectives.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    className="flex items-start"
                  >
                    <svg className="h-6 w-6 text-[#F47B20] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
              className="bg-gradient-to-br from-[#182C49]/5 to-white rounded-xl border border-gray-200 p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Global Leadership Role</h3>
              <p className="text-gray-600 mb-6">In its role as a leading global association, the IAAII strives to:</p>
              <ul className="space-y-4">
                {roles.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    className="flex items-start"
                  >
                    <svg className="h-6 w-6 text-[#182C49] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <div className="bg-[#182C49]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div 
          className="overflow-hidden rounded-3xl bg-[#F47B20]/10 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:py-20 lg:pl-16 lg:pr-10">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Join the global community of AI & informatics professionals
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-[#F47B20]/80">
                Become a part of IAAII and help shape the future of artificial intelligence and informatics worldwide.
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <motion.div 
                className="sm:flex"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/signup">
                  <Button className="w-full px-6 py-4 text-lg shadow-xl">
                    Become a Member
                  </Button>
                </Link>
              </motion.div>
              <p className="mt-4 text-sm text-white/70 text-center sm:text-left">
                Join our growing community of researchers, practitioners, and organizations dedicated to advancing AI and informatics.
              </p>
            </div>
          </div>
        </motion.div>
        </div>
    </div>
  );
};

export default HomePage; 