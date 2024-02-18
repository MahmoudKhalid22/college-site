"use client";
import Link from "next/link";
import React from "react";

const Years = () => {
  return (
    <div className="my-28" id="years">
      <p className="text-3xl mb-16 font-bold text-center text-[#164863]">
        Years
      </p>
      <div className="flex items-center justify-center flex-wrap gap-12">
        <div className="">
          <div className="flex items-center justify-center bg-[#427D9D] w-[15rem] h-[15rem]">
            <span className="font-semibold text-5xl text-center text-[#ddf2fd]">
              <span className="block">1st</span>year
            </span>
          </div>
          <div className="bg-[#164863] flex items-center justify-between py-4 px-2 ">
            <a href="/pages/:id" className="text-[#ddf2fd]">
              page
            </a>
            <div className="flex flex-col gap-4">
              <p className="text-[#ddf2fd]">semester 1 drive</p>
              <p className="text-[#ddf2fd]">semester 2 drive</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center bg-[#427D9D] w-[15rem] h-[15rem]">
            <span className="font-semibold text-5xl text-center text-[#ddf2fd]">
              <span className="block"> 2nd </span> year
            </span>
          </div>
          <div className="bg-[#164863] flex items-center justify-between py-4 px-2 ">
            <a href="/pages/:id" className="text-[#ddf2fd]">
              page
            </a>
            <div className="flex flex-col gap-4">
              <p className="text-[#ddf2fd]">semester 1 drive</p>
              <p className="text-[#ddf2fd]">semester 2 drive</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center bg-[#427D9D] w-[15rem] h-[15rem]">
            <span className="font-semibold text-5xl text-center text-[#ddf2fd]">
              <span className="block"> 3rd </span> year
            </span>
          </div>
          <div className="bg-[#164863] flex items-center justify-between py-4 px-2 ">
            <a href="/pages/:id" className="text-[#ddf2fd]">
              page
            </a>
            <div className="flex flex-col gap-4">
              <p className="text-[#ddf2fd]">semester 1 drive</p>
              <p className="text-[#ddf2fd]">semester 2 drive</p>
            </div>
          </div>
        </div>
        <div className="">
          <Link
            href="/year"
            className="flex items-center justify-center bg-[#427D9D] w-[15rem] h-[15rem] cursor-pointer"
          >
            <span className="font-semibold text-5xl text-center text-[#ddf2fd]">
              <span className="block"> 4th </span> year
            </span>
          </Link>
          <div className="bg-[#164863] flex items-center justify-between py-4 px-2 ">
            <a href="/pages/:id" className="text-[#ddf2fd]">
              page
            </a>
            <div className="flex flex-col gap-4">
              <p className="text-[#ddf2fd]">semester 1 drive</p>
              <p className="text-[#ddf2fd]">semester 2 drive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Years;
