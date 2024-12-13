import React from "react";
import { photos } from "../../assets/images";

function Footer() {
  return (
    <>
      <footer className="bg-gray-50 text-gray-800 pt-10 pb-4">
        {/* Footer Content Wrapper */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section: Logo and Address */}
          <div className="text-center md:text-left">
            {/* Logo */}
            <img
              src={photos.Logo}
              alt="Logo"
              className="mb-4 mx-auto md:mx-0 w-20"
            />
            {/* Address */}
            <p className="text-sm">
              Akshaya Centre Neerad , MPM 227
              <br />
              Neerad, Muthuvalloor PO, Malappuram Dist.
              <br />
              Pin: 673638, Kerala, India
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-green-500 hover:text-green-700">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center w-full max-w-md">
            <h3 className="text-lg font-bold mb-2">Feedback</h3>
            <p className="text-sm text-gray-600 mb-4">
              Tell Us Anything what you want
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your feedback"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white "
              />
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition"
                onClick={() =>
                  window.location.href = "mailto:swafamedia37@gmail.com?subject=Subscribe"
                }
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-10 pt-4 text-center text-sm text-gray-500">
          &copy; All rights reserved | Akshaya Neerad 2024 by _fasalu_mk_
        </div>
      </footer>
    </>
  );
}

export default Footer;
