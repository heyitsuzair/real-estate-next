import Head from "next/head";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import PropertiesInfinite from "../components/common/PropertiesInfinite";
import SpinnerLarge from "../components/common/SpinnerLarge";

import { fetchProperties } from "../functions";

interface PropertiesDataTypes {
  docs: any[];
  hasNextPage: boolean;
  nextPage: string;
}

const Shop = () => {
  const [propertiesData, setPropertiesData] = useState<PropertiesDataTypes>({
    docs: [],
    hasNextPage: false,
    nextPage: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchNextData = async () => {
    /**
     * Fetching More Data By Passing Page Number That We Got From Previous Response
     */
    const moreProperties = await fetchProperties(propertiesData.nextPage);
    setPropertiesData({
      docs: [...propertiesData.docs, ...moreProperties.docs],
      hasNextPage: moreProperties.hasNextPage,
      nextPage: moreProperties.nextPage,
    });
  };

  // eslint-disable-next-line
  const getShopData = async () => {
    /**
     * Here "1" Is Default Page No
     */
    const properties = await fetchProperties("1");
    setPropertiesData(properties);
    setIsLoading(false);
  };

  useEffect(() => {
    getShopData();

    //eslint-disable-next-line
  }, []);

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
      {isLoading ? (
        <div className="mt-20 mb-40 text-center">
          <SpinnerLarge />
        </div>
      ) : propertiesData.docs.length > 0 ? (
        <PropertiesInfinite
          fetchNextData={fetchNextData}
          propertiesData={propertiesData}
        />
      ) : (
        <h1 className="text-center text-2xl font-semibold my-36">
          <i
            className="fa fa-frown cursor-pointer text-xl border-2 mb-5 text-red-500 border-red-500 py-2 px-3 rounded-full"
            aria-hidden="true"
          ></i>{" "}
          Sorry! We Cannot Find What You Are Looking For
        </h1>
      )}
    </div>
  );
};

export default Shop;
