import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.jsx";
import { useAuth } from "../context/AuthContext";
// If using image: import logoImg from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const dropdownRef = useRef({});
  const profileDropdownRef = useRef(null);

  const { isLoggedIn, logout } = useAuth();

  // Navigation structure with dropdowns
  const navigation = [
    {
      name: "About IAAII",
      items: [
        { name: "Mission", href: "/mission" },
        { name: "Vision", href: "/vision" },
        { name: "Strategic Goals", href: "/strategic-goals" },
        { name: "Purpose & Goals", href: "/purpose-goals" },
        { name: "Global Role", href: "/global-role" },
        { name: "Code of Ethics", href: "/code-of-ethics" },
        { name: "About College", href: "/about-college" },
      ],
    },
    {
      name: "Publications",
      items: [
        { name: "Publications", href: "/publications" },
        { name: "About the Journal", href: "/about-journal" },
        { name: "Editorial Board", href: "/editorial-board" },
        { name: "Submission Guidelines", href: "/submission-guidelines" },
        { name: "Issues", href: "/issues" },
      ],
    },
    {
      name: "Membership",
      items: [
        { name: "IAAII Membership", href: "/members" },
        { name: "IAAII Represented Regions", href: "/regions" },
        { name: "Corresponding Members", href: "/corresponding" },
        { name: "IMIA Career Opportunities", href: "/careers" },
      ],
    },
    {
      name: "Resources",
      items: [
        { name: "Disclaimer", href: "/disclaimer" },
        { name: "Purpose of Website", href: "/purpose-of-website" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Close dropdown when clicking outside
    const handleClickOutside = (e) => {
      if (
        activeDropdown &&
        !dropdownRef.current[activeDropdown]?.contains(e.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close profile dropdown if clicked outside
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }

      // Handle regular dropdown menus
      if (activeDropdown !== null) {
        const currentRef = dropdownRef.current[activeDropdown];
        if (currentRef && !currentRef.contains(event.target)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.div className="h-12" whileHover={{ scale: 1.05 }}>
                <Logo className="h-12" />
                {/* If using image: <img src={logoImg} alt="IAAII Logo" className="h-8" /> */}
              </motion.div>
            </Link>

            {/* Desktop Dropdown Navigation */}
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              {navigation.map((category, idx) => (
                <div
                  key={idx}
                  className="relative"
                  ref={(el) => (dropdownRef.current[idx] = el)}
                >
                  <motion.button
                    className={`px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F47B20] inline-flex items-center ${
                      activeDropdown === idx ? "text-[#F47B20]" : ""
                    }`}
                    onClick={() => toggleDropdown(idx)}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {category.name}
                    <svg
                      className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                        activeDropdown === idx ? "transform rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>

                  <AnimatePresence>
                    {activeDropdown === idx && (
                      <motion.div
                        className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="py-1">
                          {category.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#F47B20]"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center text-gray-700 hover:text-[#F47B20] transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-[#182C49] text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {isProfileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5"
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/account-settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        Account Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/login"
                    className="px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F47B20]"
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/signup"
                    className="bg-[#F47B20] text-white hover:bg-[#e06610] px-5 py-2 rounded-md text-base font-medium"
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#F47B20] focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((category, idx) => (
                <div key={idx} className="px-2">
                  <button
                    className={`w-full flex justify-between items-center px-3 py-2 text-lg font-medium text-gray-700 hover:text-[#F47B20] ${
                      activeDropdown === `mobile-${idx}` ? "text-[#F47B20]" : ""
                    }`}
                    onClick={() => toggleDropdown(`mobile-${idx}`)}
                  >
                    {category.name}
                    <svg
                      className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                        activeDropdown === `mobile-${idx}`
                          ? "transform rotate-180"
                          : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === `mobile-${idx}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2">
                          {category.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={item.href}
                              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#F47B20]"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                              }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="pt-4 pb-3 border-t border-gray-200">
              {isLoggedIn ? (
                <div className="px-3">
                  <div className="flex items-center py-2">
                    <div className="h-10 w-10 rounded-full bg-[#182C49] text-white flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="text-base font-medium text-gray-800">
                      Account
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <Link
                      to="/profile"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F47B20]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/account-settings"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F47B20]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Account Settings
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F47B20]"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="px-3 space-y-1">
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-[#F47B20]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-[#F47B20]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
