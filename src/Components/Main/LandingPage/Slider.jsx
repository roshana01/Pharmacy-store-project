import React from "react";

export default function Slider() {
  return (
    <>
      <div className="carousel w-full relative h-[630px]">
        <div id="item1" className="carousel-item w-full ">
          <img src="./public/images/slider-3.jpg" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="./public/images/slider2.jpg" className="w-full" />
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2 absolute bottom-[1rem]">
        <a
          href="#item1"
          className=" bg-blue-500 text-white w-6 h-2 rounded-2xl"
        ></a>
        <a
          href="#item2"
          className=" bg-blue-500 text-white  w-6 h-2 rounded-2xl"
        ></a>
      </div>
    </>
  );
}
