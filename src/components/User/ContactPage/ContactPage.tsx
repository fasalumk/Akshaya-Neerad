import React, { useState } from "react";
import UserNavbar from "../../Navbar/UserNavbar";
import styles from "./ContactPage.module.scss";
import { photos } from "../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../../Footer/Footer";
import emailjs from "emailjs-com";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  emailjs.init('8mce-KmRhvYDZgj76'); // Replace with your actual User ID

  const phoneNumber = "tel:+919497555535";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_ienxatz", // Replace with your EmailJS Service ID
        "template_8rt9tfm", // Replace with your EmailJS Template ID
        templateParams,
        "8mce-KmRhvYDZgj76" // Replace with your EmailJS User ID
      )
      .then((response) => {
        console.log("Email successfully sent:", response.status, response.text);
        alert("Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error while sending email:", error);
        alert("There was an error sending your message. Please try again.");
      });
  };

  return (
    <>
      <UserNavbar />

      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center text-center pt-10">
          <h2 className="text-2xl font-extrabold text-gray-800 tracking-wider font-mono">
            ABOUT
          </h2>
          <div className="mt-1 w-16 h-1 bg-blue-500"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center w-full max-w-5xl p-6 md:p-12 gap-8">
          <div className="flex-1 flex justify-center">
            <div
              className={`${styles.logoContainer} bg-blue-500 p-4 rounded-3xl shadow-lg`}
            >
              <img
                src={photos.Logo}
                alt="SIBAQ Logo"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="flex-1">
            <form onSubmit={handleSubmit} className="p-6 rounded-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Your Name Here"
                  className="w-full bg-gray-100 h-14 rounded-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full bg-gray-100 h-14 rounded-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type Your Message"
                  className="w-full border bg-gray-100 h-20 rounded-3xl border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Send
              </button>
              <br />
              <br />
              <div className="flex items-center gap-4 mb-6">
                <p className="text-gray-700 font-semibold">Contact Through</p>
                <a href="#" className="text-green-500 hover:opacity-80">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a
                  href={phoneNumber}
                  className="bg-blue-500 text-white w-8 h-8 rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center"
                >
                  <FaPhoneAlt className="text-sm" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
