import { preLoaderAnim } from "@/animation";
import React from "react";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader w-full h-screen bg-black text-white fixed inset-0 z-10 flex justify-center items-center overflow-hidden">
      <div className="texts-container flex items-center overflow-hidden text-lg font-bold ">
        <span>Chamsou Boutique</span>
      </div>
    </div>
  );
};

export default Preloader;
