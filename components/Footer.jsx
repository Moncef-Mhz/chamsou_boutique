import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    // <footer className="bg-white w-full mx-auto text-center md:text-left justify-between p-4 flex-col md:flex md:flex-row md:items-center ">
    //   <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
    //     © 2023{" "}
    //     <Link href="/" className="hover:underline">
    //       chansou-boutique™
    //     </Link>
    //     . All Rights Reserved.
    //   </span>
    //   <ul className="flex flex-wrap w-full justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-2 gap-6">
    //     <li className="cursor-pointer">
    //       <Link href="#" className="mr-4 hover:underline md:mr-6">
    //         <AiOutlineInstagram size={25} />
    //       </Link>
    //     </li>
    //     <li className="cursor-pointer">
    //       <Link href="#" className="mr-4 hover:underline md:mr-6 ">
    //         <AiOutlineFacebook size={25} />
    //       </Link>
    //     </li>
    //     {/* <li>
    //         <Link href="#" className="mr-4 hover:underline md:mr-6">
    //           Licensing
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="#" className="hover:underline">
    //           Contact
    //         </Link>
    //       </li> */}
    //   </ul>
    // </footer>

    <div className="footer-container">
      <p>2022 Chasmou Boutique All rights reserverd</p>
    </div>
  );
};

export default Footer;
