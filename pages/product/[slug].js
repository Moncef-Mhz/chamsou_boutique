import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";
import { toast } from "react-hot-toast";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, size, color } = product;
  const [index, setIndex] = useState(0);
  const [Size, setSize] = useState("");
  const [Color, setColor] = useState("");
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty, Size, Color);
    console.log(Size);

    setShowCart(true);
  };
  const handlesubmit = () => {
    if (!Size) {
      toast.error("please Select a Size!");
    } else if (!Color && color) {
      toast.error("please Select a Color!");
    } else {
      onAdd(product, qty, Size, Color);
      setShowCart(true);
    }
  };

  return (
    <div>
      <div className="flex mt-10 items-start justify-center w-full flex-col md:flex-row ">
        <div className="w-full flex flex-col items-center">
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image rounded-xl sm:w-[400px] sm:h-[400px] w-[350px] h-[350px]"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index
                    ? "w-20  sm:w-[93px] h-20 sm:h-[93px] selected-image rounded-xl"
                    : "w-20  sm:w-[93px] h-20 sm:h-[93px] rounded-xl"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc w-full mt-4 ">
          <h1 className="text-3xl font-bold text-black  ">{name}</h1>
          <div className="reviews">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <p className=" text-4xl font-semibold text-black border-b pb-3">
            {price} da
          </p>
          {!size ? null : <h1 className="mt-2">Size</h1>}
          <div className="flex flex-row flex-wrap gap-5 group w-full mt-3 items-center">
            {size?.map((size, i) => (
              <div
                key={size}
                className={
                  size === Size
                    ? "py-4 px-6 border border-black rounded-lg bg-black text-white  duration-150 cursor-pointer"
                    : "py-4 px-6 border border-black rounded-lg hover:bg-black hover:text-white hover:scale-[1.1] duration-150 cursor-pointer"
                }
                onClick={() => setSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
          {!color ? null : <h1 className="mt-2">Color</h1>}
          <div className="flex flex-row flex-wrap gap-5 group w-full mt-3 items-center">
            {color?.map((color, i) => (
              <div
                key={color}
                className={
                  color === Color
                    ? "py-6 px-6 outline outline-offset-2 rounded-full duration-150 ease-in-out cursor-pointer"
                    : `py-6 px-6  rounded-full hover:scale-[1] duration-150 cursor-pointer`
                }
                style={{
                  backgroundColor: color,
                  filter: "contrast(75%)",
                  outlineColor: color,
                  transition: 0.2,
                }}
                onClick={() => {
                  setColor(color);
                  console.log(color);
                }}
              ></div>
            ))}
          </div>
          <h3 className="mt-4">Make it yours!</h3>
          <div className=" flex  w-full flex-row  items-center mt-2 justify-start gap-4">
            <div className="flex items-end gap-20 text-sm ">
              <div className="flex border-[1px] border-black items-center justify-between w-40  py-3 rounded-md">
                <div
                  className=" px-4  cursor-pointer text-black"
                  onClick={decQty}
                >
                  <AiOutlineMinus size={25} />
                </div>
                <div className="text-xl">{qty}</div>
                <div
                  className=" px-4  cursor-pointer text-black"
                  onClick={incQty}
                >
                  <AiOutlinePlus size={25} />
                </div>
              </div>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="buy-now  bg-black  rounded"
                onClick={handlesubmit}
              >
                Add to Cart
              </button>
              {/* <button
              type="button"
              className="buy-now bg-indigo-500"
              onClick={handleBuyNow}
            >
              Buy Now
            </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div> */}
      {/*<div className="marquee">
          <div className="maylike-products-container track ">
            {products.map((product) => (
              <div></div>
            ))}
          </div>
        </div> 
      </div> */}
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
