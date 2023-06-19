import React from "react";
import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";
import { motion } from "framer-motion";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <motion.div
      className="w-full h-[500px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-full h-[500px] ">
        <img
          src={urlFor(heroBanner.image)}
          className="h-[500px] object-cover w-full rounded-xl  brightness-50	"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 w-full h-full gap-3">
          <h1 className="text-white font-bold text-6xl">Street wear</h1>
          <Link href={`/product/${heroBanner.product}`}>
            <button className="bg-white text-black/90 rounded-xl px-5 py-3 font-semibold flex items-center gap-2">
              {heroBanner.buttonText} <GrLinkNext />
            </button>
          </Link>
        </div>
        <div className="absolute right-0 bottom-0 mx-16 my-12 flex flex-col">
          <h1 className="text-white font-bold text-lg">Description</h1>
          <p className="text-white">{heroBanner.desc}</p>
        </div>
      </div>
    </motion.div>
    // <div className="hero-banner-container">
    //   <div>
    //     <p className="beats-solo">{heroBann`er.smallText}</p>
    //     <h3>{heroBanner.midText}</h3>
    //     <h1>{heroBanner.largeText1}</h1>
    //     <img
    //       src={urlFor(heroBanner.image)}
    //       alt="headphones"
    //       className="hero-banner-image"
    //     />

    //     <div>
    //       <Link href={`/product/${heroBanner.product}`}>
    //         <button type="button">{heroBanner.buttonText}</button>
    //       </Link>
    //       <div className="desc">
    //         <h5>Description</h5>
    //         <p>{heroBanner.desc}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HeroBanner;
