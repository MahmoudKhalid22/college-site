import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="my-36 mx-auto block overflow-scroll px-6">
      <div></div>
      <table className="table-auto mx-auto my-36">
        <thead className="table-auto">
          <tr>
            <th className="py-2 px-4 bg-[#164863] border-r-2 border-r-[#dd2fd] text-[#ddf2fd]">
              lab #
            </th>
            <th className="py-2 px-4 bg-[#164863] border-r-2 border-r-[#dd2fd] text-[#ddf2fd]">
              Name
            </th>
            <th className="py-2 px-4 bg-[#164863] border-r-2 border-r-[#dd2fd] text-[#ddf2fd]">
              Teaching assistant
            </th>
            <th className="py-2 px-4 bg-[#164863] border-r-2 border-r-[#dd2fd] text-[#ddf2fd]">
              data
            </th>
            <th className="py-2 px-4 bg-[#164863] border-r-2 border-r-[#dd2fd] text-[#ddf2fd]">
              task
            </th>
            <th className="py-2 px-4 bg-[#164863] border-r-2 border-r-[#dd2fd] text-[#ddf2fd]">
              date
            </th>
            <th className="py-2 px-4 bg-[#164863] border-r-2 border-r-[#dd2fd] text-[#ddf2fd]">
              completed
            </th>
          </tr>
        </thead>
        <tbody className="table-auto">
          <tr>
            <td className="py-2 px-4 bg-[#427D9D] text-xl border-r-2 border-[#dd2fd] text-[#ddf2fd] border-t-2 ">
              1
            </td>
            <td className="py-2 px-4 bg-[#427D9D] text-xl border-r-2 border-[#dd2fd] text-[#ddf2fd] border-t-2 ">
              OSPF
            </td>
            <td className="py-2 px-4 bg-[#427D9D] text-xl border-r-2 border-[#dd2fd] text-[#ddf2fd] border-t-2 ">
              م دعاء
            </td>
            <td className="py-2 px-4 bg-[#427D9D] text-xl border-r-2 border-[#dd2fd] text-[#ddf2fd] border-t-2 ">
              <Link href="https://youtube.com/playlist?list=PLwOi0lbgLBAg4fqQcEpb77tBsVBXLDqkQ&si=eyuqc9Ndq6s7DCL4">
                small playlist
              </Link>
            </td>
            <td className="py-2 px-4 bg-[#427D9D] text-xl border-r-2 border-[#dd2fd] text-[#ddf2fd] border-t-2 ">
              ...
            </td>
            <td className="py-2 px-4 bg-[#427D9D] text-xl border-r-2 border-[#dd2fd] text-[#ddf2fd] border-t-2 ">
              first week
            </td>
            <td className="py-2 px-4 bg-[#427D9D] text-xl border-r-2 border-[#dd2fd] text-[#ddf2fd] border-t-2 ">
              not completed
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
