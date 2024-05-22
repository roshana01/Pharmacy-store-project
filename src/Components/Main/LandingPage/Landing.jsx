import React from "react";
// import { NavLink } from "react-router-dom";
import Slider from "./Slider";




export default function Landing() {
  return (
    <>
      <div className="mt-40">
        {/* component Slider */}
        <Slider />
        <div className="absolute top-[45%] pl-24">
          <span className="bg-green-500 px-3 py-1 rounded-md text-white text-sm">
            KILLS 99,9% OF BACTERIA
          </span>
          <h1 className=" my-4 text-[4em] font-semibold">Hand Sanitizer</h1>
          <p className="w-[450px] text-gray-500">
            Mild Fragrance Non-irritating Classic , Non Sticky Formula Effective
            & Safe Sanitizer For Kids And Adults.{" "}
          </p>
          <div className="my-3">
            <span className="font-semibold text-blue-500 text-2xl pr-1">
              {" "}
              $896.00
            </span>
            <span>Start From</span>
          </div>
          <button  className="btn mt-4 px-10 bg-blue-500 text-white">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}
