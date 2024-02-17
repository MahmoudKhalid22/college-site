"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-24 bg-[#9BBEC8] px-4 ">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div
        className="flex flex-col gap-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-16 bg-[#164863] h-1"></span>
        <span className="w-16 bg-[#164863] h-1"></span>
        <span className="w-16 bg-[#164863] h-1"></span>
      </div>
      <ul
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex items-center justify-center gap-24 flex-col bg-[#427D9D] transition-transform absolute left-0 top-0 h-full w-80`}
      >
        <div
          className="absolute top-4 right-4 text-5xl text-white cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
        <li>
          <Link to="home" className="text-5xl  text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="service" className="text-5xl  text-white">
            Services
          </Link>
        </li>
        <li>
          <Link to="years" className="text-5xl  text-white">
            Years
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
