import React from "react";
import main from "../../public/main.png";
import Image from "next/image";
import labs from "../../public/labs.jpg";

function page() {
  return (
    <div className="my-36 flex flex-col justify-center items-center">
      <div className="mb-12">
        <h3 className="mb-6 text-center text-3xl font-semibold text-[#164863]">
          Lectures Table
        </h3>
        <Image src={main} alt="table of lectures" />
      </div>
      <div>
        <h3 className="mb-4 text-center text-3xl font-semibold text-[#164863]">
          Labs Table
        </h3>
        <Image src={labs} alt="table of lectures" />
      </div>
    </div>
  );
}

export default page;
