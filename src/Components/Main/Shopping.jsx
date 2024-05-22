import React from "react";
import Products from "./Products";
import { useCounter } from "../../Context/AppContext";


export default function () {
  const { product } = useCounter();

  return (
    <div className="pl-16">
    <h3 className="my-8 font-semibold text-3xl">"Featured Products"</h3>
      <div className=" grid grid-cols-4 gap-4  place-content-around">
        {product?.map((item) => (
          <Products item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
