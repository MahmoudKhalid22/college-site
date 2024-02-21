"use client";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
// import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full h-full -z-10">
      <div className="flex items-center justify-around bg-[#164863] w-full h-[13rem] ">
        <ScrollLink
          to="home"
          offset={-100}
          className="text-[#ddf2fd] md:text-2xl cursor-pointer"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="service"
          offset={-100}
          className="text-[#ddf2fd] md:text-2xl cursor-pointer"
        >
          Service{" "}
        </ScrollLink>
        <ScrollLink
          to="years"
          offset={-120}
          className="text-[#ddf2fd] md:text-2xl cursor-pointer"
        >
          Year
        </ScrollLink>
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
