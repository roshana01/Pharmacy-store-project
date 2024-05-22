import React from "react";

export default function Serves({ icon, title, description }) {
  return (
    <>
      <div className=" my-5 ">
        <div className="mt-10 border-dashed border border-gray-300 w-72 h-28 flex items-center px-4">
          <div className="w-20">
            <img src={icon} alt="" className="w-16 " />
          </div>
          <div className="w-44">
            <p className="font-semibold">{title}</p>
            <p className="text-[14px] text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
