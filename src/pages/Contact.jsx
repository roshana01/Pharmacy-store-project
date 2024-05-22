import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="mt-36 relative">
        <img
          src="./public/images/back1.jpg"
          alt=""
          className="w-full  relative"
        />
        <h1 className="absolute bottom-28 left-[42%] text-[3em] font-semibold">
          Contact US
        </h1>
      </div>
      <div className="flex justify-center flex-col items-center my-14">
        <h1 className="text-3xl font-medium text-gray-800">
          Call Us Or Visit Place
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="flex w-full my-5 justify-evenly items-center">
        <div className="">
          <img src="./public/images/blog.jpg" alt="" className="w-[500px] mx-3" />
        </div>
        <div className="w-[500px]">
          <h1 className="text-3xl font-medium text-gray-800 mb-4">Sample Post With Format Link</h1>
          <p>
            Phasellus sit amet elits sem. Maecenas eleifend exid id magna
            pretium tincidunt. Nam vel venenatis odio. Sed in metus eu dui
            gravida elementum. Fusce vehicula mauris quis interdum consequat. In
            cursus est faucibus odio auctor dapibus. Aliquam interdum, lacus et
            euismod volutpat, enim metus hendrerit turpis, a maximus erat sem
            nec orci. Proin suscipit ullamcorper mattis. Sed vehicula sit amet
            risus hendrerit viverra.
          </p>
        </div>
      </div>
    </div>
  );
}
