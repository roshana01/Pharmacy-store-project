import React from "react";
import { useCounter } from "../Context/AppContext";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ShowProductChild({ item }) {
  const {id, name, price, images } = item;
  const { showShop,addShoppingCart } = useCounter();

  return (
    <div className="flex justify-evenly  px-14 ">
      {showShop && (
        <>
          <div className=" w-[300px] h-[340px] rounded-2xl border border-solid mb-10 border-gray-300  shadow overflow-hidden ">
            <LazyLoadImage src={images[0]} alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[24px] py-3">{name}</h1>
            <hr className="mb-5" />
            <ul className="list-disc py-5 px-4">
              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
              <li>Consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt
            </p>
            <p className="text-justify w-96 mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dolore aut ipsam, quo voluptatum consectetur assumenda nesciunt
              repudiandae,
            </p>
            <span className="font-semibold text-blue-500 text-[20px]">
              ${price} 💵
            </span>
            <div className="flex justify-evenly w-72 items-center gap-10 mt-6 mb-10">
              <div className="join mt-7">
                <button className="join-item btn">➖</button>
                <button className="join-item btn">0</button>
                <button className="join-item btn">➕</button>
              </div>
              <button
                onClick={()=>addShoppingCart(id)}
                className="btn mt-7 px-10 bg-blue-500 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
