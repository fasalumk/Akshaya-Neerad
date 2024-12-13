import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';


const ContactButtons = () => {
  const whatsappUrl = "https://wa.me/9497555535"; // 
  const phoneNumber = "tel:+919497555535"; 
  
  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Call Button */}
      <a
        href={phoneNumber}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <FaPhoneAlt className="text-2xl" />
      </a>
    </div>
  );
}

export default ContactButtons;
