import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

function Home({ products, bannerData }) {
  // console.log(bannerData[0].smallText);
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Products</h2>

          <div className="grid grid-cols-1 center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8  gap-y-5 md:gap-y-11  xl:gap-y-10                       ">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      {/* 
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div> */}
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
