import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Dropdown() {
  return (
    <div className="dropdown ">
      <div
        tabIndex={0}
        role="button"
        className="bg-blue-500 rounded-sm py-3 p-2 text-white m-1 w-72 flex "
      >
        <LazyLoadImage src="./public/images/menu.png" alt="" className="w-7 mx-4 " />
        shop by category
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu shadow bg-base-100 w-72 ml-1 p-2"
      >
        <li className="py-1">
          <a href="#">Item 1</a>
        </li>
        <li className="py-1">
          <a href="#">Item 2</a>
        </li>
        <li className="py-1">
          <a href="#">Item 3</a>
        </li>
        <li className="py-1">
          <a href="#">Item 4</a>
        </li>
        <li className="py-1">
          <a href="#">Item 5</a>
        </li>
      </ul>
    </div>
  );
}
