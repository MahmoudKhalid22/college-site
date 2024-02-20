import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="my-36 mx-8 flex flex-col gap-16">
      {/* 01 */}
      <div>
        <div className="text-lg md:text-3xl font-bold text-[#164863]">
          Control
        </div>
        <Link
          href="https://youtube.com/playlist?list=PL4e8hp_HqsK7z45q4FBlSPOwabQKQ6yLb&si=Wl7Er8oj4DX46h_H"
          target="_blank"
          className="text-sm md:text-lg  text-[#427D9D]"
        >
          Playlist
        </Link>
      </div>
      {/* 02 */}
      <div>
        <div className="text-lg md:text-3xl font-bold text-[#164863]">
          Database
        </div>
        <Link
          href="https://www.youtube.com/playlist?list=PL-0U9ZaNkpzMHh2kRa7nVJUIJ2Verpmpj"
          className="text-sm md:text-lg  text-[#427D9D]"
        >
          Playlist
        </Link>
      </div>
    </div>
  );
};

export default page;
