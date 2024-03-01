import React from "react";
import Logo from '../assets/pngegg.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white py-2">
      <div className="py-5 flex justify-around flex-wrap">
        <div>
          <img className="w-16 bg-white p-1 rounded-md" src={Logo} alt="" />
          <div className="text-gray-300 font-bold">
            <h1 className="text-2xl">Mega Mart</h1>
            <p className="text-xs">By Nitin Yadav</p>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl text-gray-400 font-bold">SOCIAL</h1>
          <div className="flex gap-x-5 text-xl">
            <FaTwitter  className="hover:scale-125 cursor-pointer hover:text-orange-500 transition-all"/>
            <FaFacebook className="hover:scale-125 cursor-pointer hover:text-orange-500 transition-all" />
            <FaYoutube  className="hover:scale-125 cursor-pointer hover:text-orange-500 transition-all"/>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-3">
        Copyright © 2024 - All right reserved by Nitin Yadav
      </div>
    </div>
  );
}

export default Footer;
