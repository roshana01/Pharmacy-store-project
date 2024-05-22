import React from "react";

export default function Banner() {
  return (
    <>
      <div className="w-[100%] mx-auto relative">
        <img src="./public/images/banner4.jpg" alt="" className=" mx-auto" />
        <div className="absolute top-10 left-56">
          <div className="w-[600px]">
            <h1 className=" my-4 text-[4em] font-medium">
              Online Exclusive Deal{" "}
              <span className="text-blue-500 font-extrabold">50% off</span>
            </h1>
          </div>
          <p className="w-[450px] text-gray-500">
            Mild Fragrance Non-irritating Classic , Non Sticky Formula Effective
            & Safe Sanitizer For Kids And Adults.{" "}
          </p>
          <div className="my-3">
            <span className="font-semibold text-blue-500 text-2xl pr-1">
              {" "}
              $89.00
            </span>
            <span>Start From</span>
          </div>
          <button className="btn mt-4 px-10 bg-blue-500 text-white mr-5">
            Shop Now
          </button>
          <button
            onClick={() => addBuyProduct}
            className="btn mt-4 px-10 border-2 border-solid border-blue-500 bg-inherit  text-blue-500"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}
