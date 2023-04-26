import React, { useRef } from "react";
import Link from "next/link";
import { useStateContext } from "/context/StateContext";

import { urlFor } from "../lib/client";

function Product({ product: { image, name, slug, price }, product }) {
  const cartRef = useRef();

  const {
    totalPrice,
    totalQuantities,
    onAdd,
    cartItems,
    qty,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();
  return (
    // <div className="">
    //   <Link className="" href={`/product/${slug.current}`}>
    //     <div className="group">
    //       <div className="  w-full overflow-hidden rounded-lg bg-gray-200 cursor-pointer ">
    //         <img
    //           src={urlFor(image && image[0])}
    //           alt={name}
    //           className="h-full w-full object-cover object-center group-hover:opacity-75"
    //         />
    //       </div>
    //       <div className="flex items-center justify-between mt-2">
    //         <h3 className=" text-md font-semibold  text-gray-700">{name}</h3>
    //         <p className=" text-lg font-medium text-gray-900">{price} da</p>
    //       </div>
    //     </div>
    //   </Link>
    //   <button
    //     className=" px-8 font-semibold hover:border-[#919191] duration-200 py-[5px] border-[2px] rounded-full mt-2 border-[#0a0a0a]  hover:text-[#919191]"
    //     onClick={() => onAdd(product, qty)}
    //   >
    //     Add to cart
    //   </button>
    // </div>
    // <div>
    <div className="relative">
      <Link href={`/product/${slug.current}`}>
        <div className="w-[300px] relative group hover:scale-[1.05] duration-200 card shadow-lg">
          <img
            src={urlFor(image && image[0])}
            className="w-[300px] h-[300px] object-cover rounded-sm"
          />
          <div className=" flex justify-between p-2">
            <h5 className="text-black text-xl font-bold">{name}</h5>
            <p className="text-black text-lg">{price}DA</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
{
  /* <div className="product-card  ">
  <img
    src={urlFor(image && image[0])}
    className="product-image "
    height={250}
    width={250}
  />
  <p className="text-black/80 text-xl font-bold">{name}</p>
  <p className="font-semibold ">{price} da</p>
</div>; */
}
