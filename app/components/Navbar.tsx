"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed w-full top-0 left-0 flex items-center justify-between h-24 bg-[#9BBEC8] px-4 z-10">
        <Link href="/">
          <Image src={logo} alt="logo" width={80} height={80} loading="lazy" />
        </Link>
        <div
          className="flex flex-col gap-2 md:gap-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-8 md:w-16 bg-[#164863] h-1 transition-transform duration-300 ${
              isOpen
                ? "translate-y-2 md:translate-y-4 md:top-4 -rotate-45"
                : "-rotate-0"
            }`}
          ></span>
          <span
            className={`w-8 md:w-16 bg-[#164863] h-1 ${
              isOpen ? "opacity-0" : ""
            } transition-opacity duration-300`}
          ></span>
          <span
            className={`w-8 md:w-16 bg-[#164863] h-1 transition-transform duration-300 ${
              isOpen
                ? "-translate-y-4 md:-translate-y-6 md:-top-6 rotate-45"
                : "rotate-0"
            }`}
          ></span>
        </div>
      </div>
      <ul
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-[9999] flex items-center justify-center gap-24 flex-col bg-[#427D9D] transition-transform duration-300 fixed left-0 top-0 h-full w-2/3 sm:w-1/2 md:w-80`}
      >
        <div
          className="absolute top-4 right-4 text-5xl text-[#ddf2fd] cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
        <li>
          <Link href="/">
            <ScrollLink
              to="home"
              spy={true}
              offset={-140}
              duration={300}
              className="text-4xl cursor-pointer  text-[#ddf2fd]"
            >
              Home
            </ScrollLink>
          </Link>
        </li>
        <li>
          <ScrollLink
            to="service"
            spy={true}
            offset={-140}
            duration={300}
            className="text-4xl cursor-pointer  text-[#ddf2fd]"
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="years"
            spy={true}
            offset={-170}
            duration={300}
            className="text-4xl cursor-pointer  text-[#ddf2fd]"
          >
            Years
          </ScrollLink>
        </li>
      </ul>
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
