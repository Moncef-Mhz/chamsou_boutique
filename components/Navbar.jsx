import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { motion } from "framer-motion";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <motion.div
      className="flex justify-between items-center px-[6px] py-[18px] mb-2   "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <p className="logo">
        <Link href="/">Boutique chamsou</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </motion.div>
  );
};

export default Navbar;
