import React, { useEffect, useState } from "react";
import { db } from "/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  getDoc,
} from "firebase/firestore";
import { urlFor } from "/lib/client";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

function AdminLoged() {
  const [data, setdata] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [show, setShow] = useState(null);
  const [id, setId] = useState(null);
  const collectionRef = collection(db, "orders");

  const datas = async () => {
    const q = query(collectionRef);

    const quarysnapshot = await getDocs(q);
    const order = quarysnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setdata(order);
  };
  datas();
  // console.log(getDoc(collectionRef, "xqnvYGCgR1q080aWBVH1"));
  const handledelete = async (item) => {
    deleteDoc(doc(db, "orders", item.id));
  };

  return (
    <div>
      <h1 className="text-black/80 text-4xl font-bold mb-2">Orders</h1>
      <div className="flex flex-col gap-4 relative">
        <AnimatePresence>
          {data?.map((item, i) => (
            <motion.div
              layoutId={item.id}
              key={item.id}
              variants={{
                hidden: (i) => ({ opacity: 0, y: -50 }),
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.05 },
                }),
              }}
              initial="hidden"
              custom={i}
              animate="visible"
              className="md:w-[70%] w-full rounded-md p-3 border shadow-xl flex justify-between items-start flex-col sm:flex-row md:gap-40 gap-4 relative flex-1"
              onClick={() => setSelectedId(item.cartItems.map((e) => e._id))}
            >
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

              <div className="flex flex-col gap-2 items-start  flex-1">
                {item.cartItems.map((items) => (
                  <div className="flex  gap-1 " key={item._id}>
                    <img
                      src={urlFor(items?.image[0])}
                      alt={items.name}
                      className="border-2 w-28 h-28 object-contain"
                    />
                    <div className="flex flex-col justify-between items-start">
                      <p>{items.name}</p>
                      <p>{items.orederSize} </p>
                      {items.orderColor ? <p>{items.orderColor}</p> : null}

                      <p>{items.quantity}</p>
                      <p>{items.price} da</p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className=" rounded-full p-1  absolute top-0 right-0 m-1"
                onClick={() => handledelete(item)}
              >
                <AiOutlineClose size={20} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

{
  /* {item.cartItems.map((e) => e.name)} */
}
export default AdminLoged;
