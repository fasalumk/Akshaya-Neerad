import React from "react";
import { photos } from '../../assets/images';


const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center ">
        <h1 className="text-4xl md:text-5xl  font-black text-gray-800 font-sans">
           <span className="text-blue-500 font-black">AKSHAYA CENTRE</span> <br /> NEERAD
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
        Akshaya Centers have been emerged as a finest network of effective Common Service Centers (CSC) envisioned to deliver a multitude of G2C, G2B as well as B2C services to the public under a single roof.
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:border-2 border-blue-500 font-semibold py-2 px-6 rounded">
          Join Whatsapp
        </button>
        <button className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold py-2 px-6 rounded flex items-center">
          Contact 
        </button>
      </div>
      <div className="mt-">
        <img
          src={photos.Userbg}
          alt="Illustration"
          className="max-w-full sm:h-auto md:h-96"
        />
      </div>
    </div>
  );
};

export default HeroSection;
