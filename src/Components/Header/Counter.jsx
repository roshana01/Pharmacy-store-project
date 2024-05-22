import React from "react";
import { NavLink } from "react-router-dom";
import { useCounter } from "../../Context/AppContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Counter() {
  const { count,  selectCart } = useCounter();
  // console.log(selectCart);
  const priceIn = selectCart.reduce((a, b) => {
    return a + b.price;
  }, 0);

  return (
    <div className="flex  justify-between items-center w-48 ">
      <div className="indicator">
        <span className="indicator-item badge bg-blue-500 text-white font-semibold">
          {count}
        </span>
        <NavLink to={"/cart"}>
          <LazyLoadImage
            src="./public/images/shop.png"
            alt=""
            className="w-7 font-semibold  mr-1"
          />
        </NavLink>
      </div>

      <div className="indicator m-5">
        <span className="indicator-item badge bg-blue-500 text-white font-semibold">
          0
        </span>
        <button className="">
          <img src="./public/images/heart.png" alt="" className="w-7 mr-1" />
        </button>
      </div>
      <span className="font-semibold ">${Math.floor(priceIn).toFixed(2)}</span>
    </div>
  );
}
