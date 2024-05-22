import React, { useEffect } from "react";
import { useCounter } from "../../Context/AppContext";
import { NavLink } from "react-router-dom";

export default function Products({ item }) {
  const { id, name, price, icon, images } = item;
  const { addProduct, showBoxProduct } = useCounter();

  return (
    <>
      <div className="w-[300px]">
        
        <div className="w-72 h-[390px] border-solid border border-gray-200 my-5 p-4 overflow-hidden shadow rounded">
          <NavLink to={"/product"} onClick={() => showBoxProduct(id)}>
            <div>
              <p className="text-[14px] text-gray-400">
                Acetaminophen, Anti-inflammatory,{" "}
              </p>
              <h2 className="py-3 font-semibold text-[14px]">{name}</h2>
            </div>
            <div className="w-64 h-[200px] ">
              <img src={images[0]} alt="" className="w-64 h-[150px] " />
            </div>
          </NavLink>
          {/* foot card */}
          <div className=" mt-12 border-t border-solid border-gray-200 flex justify-between items-center ">
            <span className="mt-3">${Math.floor(price).toFixed(2)}</span>

            <button onClick={() => addProduct(id)}>
              <img src={icon} alt="" className="w-7 mt-3" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
// https://demo-63.woovinapro.com/wp-content/uploads/2020/12/banner4.jpg
