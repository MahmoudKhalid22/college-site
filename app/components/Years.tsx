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
        {/* 04 */}
        <div className="">
          <Link
            href="/year"
            className="flex items-center justify-center bg-[#429d7f] w-[15rem] h-[15rem] cursor-pointer"
          >
            <span className="font-semibold text-5xl text-center text-[#ddf2fd]">
              <span className="block"> 4th </span> year
            </span>
          </Link>
          <div className="flex flex-col gap-4 bg-[#164863] py-4 px-2">
            <Link
              href="https://drive.google.com/drive/folders/1_kdrn062SMWBimE4aidB-AwzB7OiPiEp"
              target="_blank"
              className="underline cursor-pointer text-[#ddf2fd] md:text-xl"
            >
              semester 1 drive
            </Link>
            <Link
              href="https://drive.google.com/drive/folders/1TssnGRFv-Uo9XcjPF2wgjy_BOW6YsfPg"
              target="_blank"
              className="underline cursor-pointer text-[#ddf2fd] md:text-xl"
            >
              semester 2 drive
            </Link>
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-center bg-[#427D9D] w-[15rem] h-[15rem]">
            <span className="font-semibold text-5xl text-center text-[#ddf2fd]">
              <span className="block"> 3rd </span> year
            </span>
          </div>
          <div className="bg-[#164863] flex items-center justify-between py-4 px-2 ">
            <div className="flex flex-col gap-4">
              <Link
                href="https://bit.ly/3rEXnH6"
                target="_blank"
                className="underline cursor-pointer text-[#ddf2fd] md:text-xl"
              >
                semester 1 drive
              </Link>
              <Link
                href="https://drive.google.com/drive/folders/1ZAstJ9wz1shqdJPGZ7nO_ioAc8gV7z9r"
                target="_blank"
                className="underline cursor-pointer text-[#ddf2fd] md:text-xl"
              >
                semester 2 drive
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-center bg-[#427D9D] w-[15rem] h-[15rem]">
            <span className="font-semibold text-5xl text-center text-[#ddf2fd]">
              <span className="block"> 2nd </span> year
            </span>
          </div>
          <div className="flex flex-col gap-4 bg-[#164863]  py-4 px-2">
            <p className="underline cursor-pointer text-[#ddf2fd] md:text-xl">
              semester 1 drive
            </p>
            <p className="underline cursor-pointer text-[#ddf2fd] md:text-xl">
              semester 2 drive
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-center bg-[#427D9D] w-[15rem] h-[15rem]">
            <span className="font-semibold text-5xl text-center text-[#ddf2fd]">
              <span className="block">1st</span>year
            </span>
          </div>
          <div className="flex flex-col gap-4 bg-[#164863] py-4 px-2 ">
            <Link
              href="#"
              className="underline cursor-pointer text-[#ddf2fd] md:text-xl"
            >
              semester 1 drive
            </Link>
            <Link
              href="#"
              className="underline cursor-pointer text-[#ddf2fd] md:text-xl"
            >
              semester 2 drive
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Years;
