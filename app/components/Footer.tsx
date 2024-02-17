"use client";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-around bg-[#164863] w-full h-[13rem]">
        <a href="#home" className="text-[#ddf2fd] md:text-2xl font-semibold">
          Home
        </a>
        <a href="#service" className="text-[#ddf2fd] md:text-2xl font-semibold">
          Service
        </a>
        <a href="#years" className="text-[#ddf2fd] md:text-2xl font-semibold">
          Year
        </a>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 py-4 bg-[#9BBEC8]">
        <p className="text-[#164863] md:text-xl font-semibold">
          Design with ♥ by Mahmoud Khalid
        </p>
        <p className="text-[#164863] md:text-xl font-semibold">
          @2024; All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
