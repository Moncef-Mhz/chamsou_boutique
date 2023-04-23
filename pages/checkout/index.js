import React, { useState } from "react";
import { useStateContext } from "/context/StateContext";
import Link from "next/link";
import { urlFor } from "/lib/client";
import toast from "react-hot-toast";

import { collection, addDoc } from "firebase/firestore";
import { db } from "/firebase";

function Checkout() {
  const {
    setTotalPrice,
    totalQuantities,
    setTotalQuantities,
    cartItems,
    setCartItems,

    onRemove,
    qty,
  } = useStateContext();
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const collectionRef = collection(db, "orders");
  const handlesubmit = (e) => {
    // const adress = [name, name, lastName, PhoneNumber];
    e.preventDefault();
    addDoc(collectionRef, {
      name: name,
      lastName: lastName,
      wilaya: wilaya,
      PhoneNumber: PhoneNumber,
      cartItems: cartItems,
    })
      .then(() => {
        toast.success("your order has been done!");
        setCartItems([]);
        setTotalQuantities(0);
        setTotalPrice(0);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="grid md:grid-cols-4 md:gap-5">
        <div className="overflow-x-auto md:col-span-3">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="px-5 text-left">Item</th>
                <th className="    p-5 text-right">Quantity</th>
                <th className="  p-5 text-right">Price</th>
                <th className="p-5 text-right">Subtotal</th>
                <th className="p-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id} className="border-b ">
                  <td>
                    <Link href={`/product/${item.slug.current}`}>
                      <div className="flex items-center cursor-pointer">
                        <img
                          src={urlFor(item.image && item.image[0])}
                          width={50}
                          height={50}
                          className="product-image"
                        />
                        {item.name}
                      </div>
                    </Link>
                  </td>
                  <td className=" p-5 text-right">{item.quantity}</td>
                  <td className="p-5 text-right">{item.price} da</td>
                  <td className="p-5 text-right">
                    {item.quantity * item.price} da
                  </td>
                  <td className="p-5 text-right" onClick={() => onRemove(item)}>
                    delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form onSubmit={handlesubmit}>
          <div className=" p-6 bg-white flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
              <div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={name}
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="name">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        required
                        value={lastName}
                        placeholder="Enter your last name"
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="wilaya">wilaya</label>
                      <input
                        type="text"
                        name="wilaya"
                        id="wilaya"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        required
                        value={wilaya}
                        placeholder="wilaya"
                        onChange={(e) => setWilaya(e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="Phone Number">Phone Number</label>
                      <input
                        type="text"
                        name="Phone_Number"
                        id="Phone_Number"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        required
                        value={PhoneNumber}
                        placeholder="enter your phone number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-5 mt-5">
                      <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded w-full">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Checkout;
