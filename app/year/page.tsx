"use client";
import Link from "next/link";
import React, { useState } from "react";

const Year = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-16 mt-36 mx-8">
      <button
        className="py-4 px-6 text-2xl font-semibold text-center bg-[#427D9D] text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        Semester 2 🔽
      </button>
      <ul
        className={`${
          isOpen ? "h-auto max-h-[40rem]" : "max-h-0"
        } flex flex-col items-start duration-300 overflow-hidden justify-start px-4 bg-[#164863] w-52 transition-all`}
      >
        <li className="text-xl text-white border-b-2 border-white py-4 block w-full hover:pl-4 cursor-pointer transition-all duration-300">
          <Link href="/tables">tables</Link>
        </li>
        <li className="text-xl text-white border-b-2 border-white py-4 block w-full hover:pl-4 cursor-pointer transition-all duration-300">
          <Link href="/labs">labs</Link>
        </li>
        <li className="text-xl text-white border-b-2 border-white py-4 block w-full hover:pl-4 cursor-pointer transition-all duration-300">
          <Link href="/projects">projects</Link>
        </li>
        <li className="text-xl text-white border-b-2 border-white py-4 block w-full hover:pl-4 cursor-pointer transition-all duration-300">
          <Link href="/subjects">subjects</Link>
        </li>
        <li className="text-xl text-white  py-4 block w-full hover:pl-4 cursor-pointer transition-all duration-300">
          <Link href="/drives">drives</Link>
        </li>
      </ul>
    </div>
  );
};

export default Year;
