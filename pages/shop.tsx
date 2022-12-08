import Head from "next/head";
import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import ListingsCard from "../components/common/ListingsCard";

const shop = () => {
  return (
    <div>
      <Head>
        <title>Shop</title>
        <meta
          name="description"
          content="Real Estate Site My Muhammad Uzair. Shop"
        />
      </Head>
      <BreadCrumb text="Shop" />
      <div className="listings md:px-4 gap-8 lg:gap-4 justify-center py-32 grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <ListingsCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <ListingsCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <ListingsCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <ListingsCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <ListingsCard />
        </div>
      </div>
    </div>
  );
};

export default shop;
