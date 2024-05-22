import React, { useState } from "react";
import ShowProductChild from "./ShowProductChild";
import { useCounter } from "../Context/AppContext";

export default function ShowProduct() {
  const { showShop} = useCounter();

  return (
    <>
      <div className="mt-56">
        {showShop?.map((item) => (
          <ShowProductChild item={item} key={`${item.id} +id`} />
        ))}
      </div>
    </>
  );
}
