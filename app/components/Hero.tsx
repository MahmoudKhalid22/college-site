"use client";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      className="mt-12 md:mt-6 flex items-center justify-between flex-row-reverse min-h-screen overflow-hidden"
      id="home"
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.7 }}
      >
        <Image
          src="/hero.png"
          alt="hero"
          loading="lazy"
          width={350}
          height={350}
          className="hidden lg:block object-contain"
        />
      </motion.div>
      <div className="flex flex-col items-center justify-center text-center md:text-start md:justify-start md:items-start gap-14">
        <div className="flex flex-col gap-3">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.7 }}
            className="text-lg mt-2 opacity-0 md:text-3xl font-bold md:w-[650px] text-[#164863] md:leading-relaxed"
          >
            Welcome to Computer and System Engineering Academic Hub at Zagazig
            University
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.7 }}
            className="text-sm leading-loose md:text-xl md:leading-10 md:w-[650px] text-[#164863]"
          >
            Explore academic curricula tailored for Computer and System
            Engineering students at Zagazig University&apos;s College of
            Engineering. Access updated resources, virtual lectures, and
            interactive materials to enhance your learning journey.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 16, opacity: 1 }}
          transition={{ type: "tween", duration: 0.7 }}
        >
          <Link
            to="years"
            offset={-120}
            className="bg-[#164863] text-white md:text-xl  mx-auto md:mx-0  text-sm px-4 py-2 md:px-8 md:py-4 w-fit rounded-md md:rounded-xl hover:bg-[#2d5a73] transition-colors duration-300 cursor-pointer"
          >
            go to academic years
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
