import React from "react";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="container mx-auto w-[100%] mt-4">
        <div className="flex justify-around">
          {/* component dropdown list  */}
          <Dropdown />
          <ul className="flex mt-4 w-72 justify-between">
            <li>
              <NavLink to={"/"} className="font-semibold ">
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink to={"/about"} className="font-semibold ">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="font-semibold ">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <h2 className="text-gray-500 mt-4">Free Shipping on Orders $59+</h2>
        </div>
      </div>
    </>
  );
}
