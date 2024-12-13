import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { photos } from '../../assets/images';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faConciergeBell, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';


const UserNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile menu toggle
  const navbarRef = useRef(null); // Ref for detecting outside clicks
  const location = useLocation(); // React Router's hook for tracking current location

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <>
      <nav className="bg-white font-semibold text-gray-700 " ref={navbarRef}>
        <div className="container mx-auto md:px-36 py-3 h-20 flex items-center sm: px-10">
          {/* Logo */}
          {/* <div className="text-xl font-extrabold text-gray-900">AKSHAYA USER</div> */}
      
      <a href="/"><img src={photos.GIF} alt="" className="w-64"/></a>
          {/* Desktop Menu Items */}
          <ul className="hidden md:flex space-x-4 lg:space-x-6 lg:pl-64 font-serif">
  <li className="hover:text-blue-500">
    <a href="/about">
      <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> ABOUT
    </a>
  </li>
  <li className="hover:text-blue-500">
    <a href="/services">
      <FontAwesomeIcon icon={faConciergeBell} className="mr-2" /> SERVICES
    </a>
  </li>
  <li className="hover:text-blue-500">
    <a href="/location">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> LOCATE
    </a>
  </li>
  <li className="hover:text-blue-500">
    <a href="/contact">
      <FontAwesomeIcon icon={faPhone} className="mr-2" /> CONTACT
    </a>
  </li>
</ul>


          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="text-black hover:text-gray pl-4 "
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-white md:hidden">
            <ul className="space-y-2 py-2">
              <li className="px-4 py-2 hover:bg-blue-100">
                <a href="#">ABOUT</a>
              </li>
              <li className="px-4 py-2 hover:bg-blue-100">
                <a href="#">SERVICES</a>
              </li>
              <li className="px-4 py-2 hover:bg-blue-100">
                <a href="#">LOCATE</a>
              </li>
              <li className="px-4 py-2 hover:bg-blue-100">
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default UserNavbar;