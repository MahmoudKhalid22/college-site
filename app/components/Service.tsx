import React from "react";

function Service() {
  return (
    <div className=" py-36" id="service">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#164863] mb-12">
        Service
      </h2>
      <div className="flex flex-col gap-20 md:gap-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-lg md:text-2xl font-semibold text-[#164863] ">
              Academic Resources
            </p>
            <p className="text-sm md:text-xl leading-loose md:w-[500px] text-[#164863] text-center">
              Access a comprehensive collection of academic resources tailored
              specifically for Computer and System Engineering students. From
              textbooks to research papers, we provide the tools you need to
              excel in your studies.
            </p>
          </div>
          <div>
            <img src="/service_1.png" alt="academic lectures" />
          </div>
        </div>
        <div className="flex flex-col-reverse gap-8 md:gap-0 md:flex-row-reverse  items-start justify-between">
          <div className="flex flex-col md:items-end gap-4 items-center">
            <p className="text-lg md:text-2xl font-semibold text-[#164863] ">
              Virtual Lectures
            </p>
            <p className="text-sm md:text-xl leading-loose md:w-[700px] text-[#164863] text-center">
              Attend virtual lectures conducted by experienced professors and
              industry professionals. Engage in real-time discussions, ask
              questions, and deepen your understanding of complex topics from
              the comfort of your own home.
            </p>
          </div>
          <div>
            <img
              src="/service_2.png"
              alt="virtual lectures"
              className="w-[20rem] h-[12rem] md:w-[28rem] md:h-[20rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
