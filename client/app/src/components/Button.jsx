import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, primary, onClick, className, ...props }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        primary
          ? 'bg-[#182C49] text-white hover:bg-[#263d62] focus:ring-[#182C49]'
          : 'bg-[#F47B20] text-white hover:bg-[#e06610] focus:ring-[#F47B20] border border-transparent'
      } ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button; 