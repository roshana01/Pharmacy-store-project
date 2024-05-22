import React from "react";
import ListTeam from "./Team.jsx/ListTeam";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function About() {
  return (
    <>
      <div className="">
        <div className="mt-36 relative">
          <LazyLoadImage
            src="./public/images/back1.jpg"
            alt=""
            className="w-full  relative"
          />
          <h1 className="absolute bottom-28 left-[42%] text-[3em] font-semibold">
            About US
          </h1>
        </div>

        <div className="flex justify-around items-center mt-8   px-16">
          <div>
            <h1 className="font-semibold text-4xl leading-normal text-gray-700">
              We Are Here To Dream! Our Team Is Here Surve You.
            </h1>
            <h3 className="text-xl text-gray-700 py-4 ">
              At vero eos et accusamus et iusto odio digni goikussimos ducimus
              qui to bonfoe. Ntium voluum deleniti atque corrupti quos.
            </h3>
            <p className="text-gray-500  pr-4">
              Contrary to popular belief, Lorem Ipsum’s not simply random text.
              It has roots in piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard Clintock, Latin professor
              at arm Hampden-Sydney College in Virginia, looked up one of the
              more Latin words, consectetur, from a Lorem Ipsum passage, and
              going through. the cites of the word in classical literature,
              discovered the undoubtable source.
            </p>
          </div>
          <div className="">
            <img
              src="./public/images/blog2.jpg"
              alt=""
              className="max-w-none w-[750px] h-[500px] rounded-sm"
            />
          </div>
        </div>
        <ListTeam />
      </div>
    </>
  );
}
