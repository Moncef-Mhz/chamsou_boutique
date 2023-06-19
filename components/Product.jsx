import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "/context/StateContext";
import VanillaTilt from "vanilla-tilt";

import { urlFor } from "../lib/client";

function Product({ product: { image, name, slug, price }, product, sel }) {
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
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".car"), {
      max: 5,
      speed: 10,
      glare: false,
      "max-glare": 0.5,
    });
  }, []);
  return (
    <div className={`relative car`}>
      <Link href={`/product/${slug.current}`}>
        <div className="w-[300px] relative group hover:scale-[1.05] duration-200 card shadow-lg rounded-md car">
          <img
            src={urlFor(image && image[0])}
            className="w-[300px] h-[300px] object-cover rounded-t-md"
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
