import React from "react";
import { useCounter } from "../../Context/AppContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ItemCart({ cart }) {
  const { id, name, price, images } = cart;
  const {
    removeItemProduct,
    previousAddProduct,
    nextAddProduct,
    btnAddProduct,
  } = useCounter();

  return (
    <>
      <tbody className="shadow">
        {/* row 1 */}

        <tr className="flex justify-around items-center  text-[15px] mr-24 ">
          <td>
            <div className="flex items-center gap-2">
              <div className="avatar shadow rounded-full">
                <div className="mask mask-squircle w-14 h-14 rounded-full">
                  <LazyLoadImage
                    src={images[0]}
                    alt="Avatar Tailwind CSS Component"
                    className="shadow"
                  />
                </div>
              </div>
              <div className="w-48">
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            <span className="text-[17px] mr-12">
              ${Math.floor(price).toFixed(2)}
            </span>
          </td>
          <td>
            <div className="join">
              <button
                className="join-item btn"
                onClick={() => previousAddProduct(id)}
              >
                ➖
              </button>
              <button className="join-item btn">{cart.total}</button>
              <button
                className="join-item btn"
                onClick={() => nextAddProduct(id)}
              >
                ➕
              </button>
            </div>
          </td>
          <th>
            <button
              className="btn btn-ghost btn-xs text-[17px]"
              onClick={() => removeItemProduct(id)}
            >
              {" "}
              ❌
            </button>
          </th>
        </tr>
      </tbody>
    </>
  );
}
