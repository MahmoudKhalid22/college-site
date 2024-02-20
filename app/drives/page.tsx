import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Link
      href="https://drive.google.com/drive/folders/1TssnGRFv-Uo9XcjPF2wgjy_BOW6YsfPg"
      className="block my-36 text-3xl font-semibold underline text-blue-600 px-8 "
      target="_blank"
    >
      Our drive
    </Link>
  );
};

export default page;
