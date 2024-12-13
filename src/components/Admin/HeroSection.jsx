import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { photos } from '../../assets/images';

const HeroSection = () => {
  const location = useLocation();
  const message = location.state?.message;

  const [isMessageVisible, setIsMessageVisible] = useState(false); // Initially set to false for fade-in
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (message) {
      setIsMessageVisible(true); // Start the fade-in effect

      const timer = setTimeout(() => {
        setFadeOut(true); // Trigger fade-out effect after 2 seconds
        setTimeout(() => {
          setIsMessageVisible(false); // Hide the message after fade-out
        }, 1000); // Wait for the fade-out to finish before removing the message
      }, 2000);

      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [message]);

  return (
    <div className="min-h-screen bg-white text-white text-xs flex flex-col items-center justify-center relative" style={{marginTop:"-20px"}}>
      {isMessageVisible && message && (
        <div
          className={`bg-gray-800 w-48 h-9 p-4 rounded-lg absolute top-10 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center mt-96 
          ${fadeOut ? 'opacity-0 transition-opacity duration-1000' : 'opacity-100 transition-opacity duration-1000 ease-in-out'}`}
        >
          {/* Tick Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ffffff"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path d="M9 16.2l-4.4-4.4 1.4-1.4 3 3 7-7 1.4 1.4z" />
          </svg>
          {message}
        </div>
      )}

      {/* Image Section */}
      <div className="relative w-full h-screen overflow-hidden ">
        <img className="absolute top-0 left-0 w-full h-full object-cover " src={photos.BG} alt="Background" />
      </div>
    </div>
  );
};

export default HeroSection;
