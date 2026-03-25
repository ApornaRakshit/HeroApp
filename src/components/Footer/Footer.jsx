import React from 'react';
import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0f2a36] text-white px-6 py-10">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" src={logo} alt="logo" />
          <p className="text-white cursor-pointer hover:text-purple-400 font-semibold text-lg">HERO.IO</p>
        </div>
        <div className="text-center md:text-right">
          <p className="mb-2 text-sm text-gray-300">Social Links</p>
          <div className="flex gap-4 justify-center md:justify-end">
            <FaTwitter className="cursor-pointer hover:text-purple-400" />
            <FaLinkedin className="cursor-pointer hover:text-purple-400" />
            <FaFacebook className="cursor-pointer hover:text-purple-400" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-6"></div>
      
      {/* Bottom */}
      <div className="text-center text-sm text-gray-300">
        Copyright © 2025 - All right reserved
      </div>

    </div>
  );
};

export default Footer;