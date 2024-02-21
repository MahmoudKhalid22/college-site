"use client";
import Link from "next/link";
import React, { useState } from "react";

const Year = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="year mt-36 mx-8 z-50">
      <button
        className={`py-4 w-60 text-2xl font-semibold text-center bg-[#164863] text-white transition-all duration-300   ${
          isOpen ? "rounded-tr-2xl rounded-tl-2xl" : "rounded-none"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Semester 2 🔽
      </button>
      <ul
        className={`${
          isOpen ? "h-auto max-h-[40rem]" : "max-h-0"
        } flex flex-col items-start duration-300 overflow-hidden justify-start  bg-[#427D9D] w-60 transition-all z-20 relative`}
      >
        <li className="text-xl z-20 text-white border-b-2 border-white  block w-full hover:pl-4 cursor-pointer transition-all duration-300">
          <Link className="py-4 block h-full px-4 w-full " href="/tables">
            tables
          </Link>
        </li>
        <li className="text-xl z-20 text-white border-b-2 border-white  block w-full hover:pl-4 cursor-pointer transition-all duration-300">
          <Link className="py-4 block h-full px-4 w-full " href="/labs">
            labs
          </Link>
        </li>
        <li className="text-xl z-20 text-white border-b-2 border-white  block w-full hover:pl-4 cursor-pointer transition-all duration-300">
          <Link className="py-4 block h-full px-4 w-full " href="/projects">
            projects
          </Link>
        </li>
        <li className="text-xl z-20 text-white border-b-2 border-white  block w-full hover:pl-4 cursor-pointer transition-all duration-300">
          <Link className="py-4 block h-full px-4 w-full " href="/subjects">
            subjects
          </Link>
        </li>
        <li className="text-xl z-20 text-white   block w-full hover:pl-4 cursor-pointer transition-all duration-300">
          <Link className="py-4 block h-full px-4 w-full " href="/drives">
            drives
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Year;
