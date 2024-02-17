import React from "react";

function Hero() {
  return (
    <div
      className="mt-12 md:mt-6 flex items-center justify-between flex-row-reverse min-h-screen"
      id="home"
    >
      <div>
        <img
          src="/hero.png"
          alt="hero"
          className="w-[25rem] h-[25rem] hidden lg:block object-contain"
        />
      </div>
      <div className=" flex flex-col items-center justify-center text-center md:text-start md:justify-start md:items-start gap-14">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg md:text-3xl font-bold md:w-[650px] text-[#164863] leading-normal">
            Welcome to Computer Science Hub at Zagazig University
          </h1>
          <p className="text-sm md:text-lg text-[#164863] md:w-[770px] leading-loose">
            Explore academic curricula tailored for Computer and System
            Engineering students at Zagazig University's College of Engineering.
            Access updated resources, virtual lectures, and interactive
            materials to enhance your learning journey.
          </p>
        </div>
        <button className="bg-[#164863] text-white md:font-semibold md:text-xl mx-auto md:mx-0  text-sm px-4 py-2 md:px-8 md:py-4 w-fit rounded-md md:rounded-xl hover:bg-[#0f3245] transition-colors duration-300">
          <a href="#years">go to academic years</a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
