import React from "react";
import ItemCart from "./ItemCart";
import { useCounter } from "../../Context/AppContext";

export default function ListCart() {
  const { selectCart } = useCounter();

  return (
    <>
      <div className=" mb-10">
        <table className="table text-start mt-48">
          {/* head */}
          <thead className="">
            <tr className="flex justify-around items-center p-2 text-[15px] ml-20">
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>
                <button className="text-lg">details❌</button>
              </th>
            </tr>
          </thead>
          {/* body : on the item component ItemShop*/}
          {selectCart?.map(
            (cart ) => (
              <ItemCart cart={cart} key={cart.id} />
            )
            // console.log(item)
          )}
        </table>
      </div>
    </>
  );
}
