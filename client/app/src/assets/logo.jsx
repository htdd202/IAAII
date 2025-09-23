import React from 'react';

const Logo = ({ className }) => (
  <svg 
    width="160" 
    height="60" 
    viewBox="0 0 160 60" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      {/* Stylized S shape */}
      <path 
        d="M34 46L20 38V22L34 14L48 22V38L34 46Z" 
        fill="#F47B20" 
        stroke="#182C49" 
        strokeWidth="2"
      />
      <path 
        d="M34 30L20 22L34 14" 
        stroke="#182C49" 
        strokeWidth="2" 
        fill="none"
      />
      {/* IAAII text */}
      <text x="56" y="40" fontSize="32" fontWeight="bold" fill="#182C49">IAA</text>
      <text x="116" y="40" fontSize="32" fontWeight="bold" fill="#F47B20">II</text>
    </g>
  </svg>
);

export default Logo; 