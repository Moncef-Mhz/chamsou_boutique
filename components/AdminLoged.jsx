import React, { useEffect, useState } from "react";
import { db } from "/firebase";
import { collection, getDocs, getDoc } from "firebase/firestore";
import { urlFor } from "/lib/client";

function AdminLoged() {
  const [data, setdata] = useState([]);
  const collectionRef = collection(db, "orders");

  useEffect(() => {
    const getdata = [];
    getDocs(collectionRef).then((res) => {
      res.docs.forEach((item) => getdata.push(item.data()));
      setdata(getdata);
    });
  }, []);
  console.log(data);
  return (
    <div>
      <h1 className="text-black/80 text-4xl font-bold mb-2">Orders</h1>
      <div className="flex flex-col gap-4 ">
        {data?.map((item) => (
          <div className="md:w-[70%] w-full rounded-md p-3 border shadow-xl flex justify-between items-start flex-wrap gap-4 cursor-pointer">
            <div
              className="  flex flex-col items-start justify-between  "
              key={item}
            >
              <h5>
                <strong>Name:</strong> {item.name}
              </h5>
              <h5>
                <strong>Last Name:</strong> {item.lastName}
              </h5>
              <h5>
                <strong>Wilaya:</strong> {item.wilaya}
              </h5>
              <h5>
                <strong>Phone:</strong> {item.PhoneNumber}
              </h5>
            </div>
            <div className="flex flex-col gap-2 items-start left-0 ">
              {item.cartItems.map((items) => (
                <div className="flex  gap-1">
                  <img
                    src={urlFor(items?.image[0])}
                    alt={items.name}
                    className="border-2 w-28 h-26"
                  />
                  <div className="flex flex-col justify-between items-start">
                    <p>
                      <strong>Name: </strong>
                      {items.name}
                    </p>
                    <p>
                      <strong>Size: </strong> {items.orederSize}{" "}
                    </p>
                    {items.orderColor ? (
                      <p>
                        <strong>Color: </strong> {items.orderColor}
                      </p>
                    ) : null}

                    <p>
                      <strong>Quantity:</strong> {items.quantity}
                    </p>
                    <p>
                      <strong>Price:</strong> {items.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* {item.cartItems.map((e) => e.name)} */
}
export default AdminLoged;
