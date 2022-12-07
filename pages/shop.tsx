import Head from "next/head";
import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";

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
    </div>
  );
};

export default shop;
