// src/AnimatedButton.js

import React from "react";

const AnimatedButton = () => {
  return (
    <div className="flex items-center justify-center ">
      <button className="relative flex items-center justify-start w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 group hover:w-48">
      <span className="absolute left-12 opacity-0 whitespace-nowrap transition-opacity duration-300 group-hover:opacity-100">
          ADD TO PLAYLIST
        </span>
        <svg
          className="w-6 h-6 m-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h3m4 0h9m-9 4h9m-9 4h9m-4-8l4-4m0 0l4 4m-4-4v12"
          ></path>
        </svg>
        
      </button>
    </div>
  );
};

export default AnimatedButton;
