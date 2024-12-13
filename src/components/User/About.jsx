import React from 'react'
import { photos } from '../../assets/images';
import UserNavbar from '../Navbar/UserNavbar';
import Footer from '../Footer/Footer';

const  About=() => {
  return (
    <>
    <UserNavbar />
     <div className="min-h-screen bg-gray-100 flex flex-col px-4 lg:px-16 py-20">
     <div className="text-center mb-10">
        <h2 className="text-xl font-extrabold text-gray-800 tracking-wider font-mono">
          ABOUT
        </h2>
        <div className="mt-1 w-16 h-1 bg-blue-500 mx-auto"></div>
      </div>
      {/* Wrapper for Text and Image */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center bg-white rounded-br-full  shadow-lg overflow-hidden">
        {/* Left: Text Section */}
        <div className="flex-1 px-6 lg:px-12 py-8 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
            Akshaya <span className="text-blue-500">Neerad</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
          Akshaya Centers have been emerged as a finest network of effective Common Service Centers (CSC) envisioned to deliver a multitude of G2C, G2B as well as B2C services to the public under a single roof.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gray-50 border border-gray-300 text-gray-800 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300"
          >
            View More
            <span className="ml-2 text-lg" aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Right: Image Section */}
        <div className="flex-1">
          <img
            src={photos.Logo}// Replace with your actual image URL
            alt="Mahdiyya Course"
            className="object-cover w-2/3 h-full rounded-3xl ml-48"
          />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About