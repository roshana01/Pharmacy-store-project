import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ItemTeam({ item }) {
  // console.log(item);
  const { img, jop, name } = item;
  return (
    <div className=" flex flex-col items-center  ">
      <div className="mb-8 ">
        <LazyLoadImage src={img} alt="" className="w-56 h-56 shadow-lg rounded-full " />
      </div>
      <h1>{name}</h1>
      <p>{jop}</p>
    </div>
  );
}
