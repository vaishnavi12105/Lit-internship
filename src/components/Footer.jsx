import React from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">
        
        {/* Left: Logo and Nav Links */}
        <div className="flex flex-col space-y-4 md:w-1/5">
          <img src="\public\Screenshot 2025-05-16 145319.png" alt="Logo" className="w-10 h-10" />
         
          <div className="space-y-2 flex flex-col">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Services</a>
          </div>
        </div>

        {/* Center: Newsletter */}
        <div className="flex flex-col md:w-2/5 space-y-2">
          <h4 className="font-semibold">Join our Community</h4>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-white border-none focus:outline-none"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md font-semibold text-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col space-y-2 md:w-1/3">
          <h4 className="font-semibold">Contact Us</h4>
          <div className="flex items-center gap-2">
            <FaEnvelope /> <span>contact@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin /> <span>/luxuryintaste</span>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram /> <span>@luxuryintaste</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTwitter /> <span>@luxuryintaste</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        © 2024 Luxuryintaste. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
