import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    Size,
    Color,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();
  // console.log(Size);
  const handleCheckout = () => {
    setShowCart(false);
    // if (response.statusCode === 500) return;

    // const data = await response.json();
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart&nbsp;</span>
          {cartItems.length < 1 ? (
            <span className=" text-indigo-600">Is Empty</span>
          ) : (
            <span className=" ml-2 text-indigo-600">
              ({totalQuantities} items)
            </span>
          )}
        </button>

        {cartItems.length < 1 && (
          <div className=" flex flex-col items-center h-full justify-center">
            <AiOutlineShopping size={150} className="" opacity={0.8} />
            <h3 className="text-2xl">Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn bg-indigo-600"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1
            ? cartItems.map((item) => (
                <li key={item._id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={urlFor(item?.image[0])}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a>{item.name}</a>
                        </h3>
                        <p className="ml-4">{item.price} da</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 capitalize">
                        {Size} -- {Color}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex border-[1px] items-center justify-between w-[40%] py-2 rounded-md">
                        <div
                          className="minus pl-4  cursor-pointer"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </div>
                        <div className="text-md">{item.quantity}</div>
                        <div
                          className="text-indigo-700 pr-4  cursor-pointer"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </div>
                      </div>
                      {/* <p className="text-gray-500">Qty {item.quantity}</p> */}

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => onRemove(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : null}
        </div>
        {cartItems.length >= 1 && (
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6 bottom-0 absolute w-full left-0">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
              <p>Subtotal</p>
              <p>{totalPrice} da</p>
            </div>
            <Link href="/checkout" className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                onClick={() => setShowCart(false)}
              >
                Checkout
              </a>
            </Link>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or &nbsp;
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                  <span> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
// <div className="cart-bottom">
//   <div className="total">
//     <h3>Subtotal:</h3>
//     <h3>{totalPrice} da</h3>
//   </div>
//   <Link className="btn-container" href="/checkout">
//     <button type="button" className="btn" onClick={handleCheckout}>
//       Checkout
//     </button>
//   </Link>
// </div>

// <div className="product" key={item._id}>
//   <img
//     src={urlFor(item?.image[0])}
//     className="cart-product-image"
//   />
//   <div className="item-desc">
//     <div className="flex top">
//       <h5>{item.name}</h5>
//       <h4>{item.price} da</h4>
//     </div>
//     <div className="flex  bottom">
//       <div>
//         <p className="  quantity-desc">
//           <span
//             className="minus"
//             onClick={() =>
//               toggleCartItemQuanitity(item._id, "dec")
//             }
//           >
//             <AiOutlineMinus />
//           </span>
//           <span className="num" onClick="">
//             {item.quantity}
//           </span>
//           <span
//             className="plus"
//             onClick={() =>
//               toggleCartItemQuanitity(item._id, "inc")
//             }
//           >
//             <AiOutlinePlus />
//           </span>
//         </p>
//       </div>
//       <button
//         type="button"
//         className="remove-item"
//         onClick={() => onRemove(item)}
//       >
//         <TiDeleteOutline />
//       </button>
//     </div>
//   </div>
// </div>
