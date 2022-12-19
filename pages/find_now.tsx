import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import PropertiesInfinite from "../components/common/PropertiesInfinite";
import SpinnerLarge from "../components/common/SpinnerLarge";

import { getFliteredProperties } from "../functions";
import { capitalizeFirstLetter } from "../utils";

interface PropertiesDataTypes {
  docs: any[];
  hasNextPage: boolean;
  nextPage: string;
}

const FindNow = () => {
  const router = useRouter();
  const { area } = router.query;
  const { status } = router.query;
  const { type } = router.query;

  const [propertiesData, setPropertiesData] = useState<PropertiesDataTypes>({
    docs: [],
    hasNextPage: false,
    nextPage: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchNextData = async () => {
    const values = {
      area,
      status,
      type,
    };
    /**
     * Fetching More Data By Passing Page Number That We Got From Previous Response
     */
    const moreProperties = await getFliteredProperties(
      propertiesData.nextPage,
      values
    );
    setPropertiesData({
      docs: [...propertiesData.docs, ...moreProperties.docs],
      hasNextPage: moreProperties.hasNextPage,
      nextPage: moreProperties.nextPage,
    });
  };

  // eslint-disable-next-line
  const getFilteredData = async () => {
    const values = {
      area,
      status,
      type,
    };
    /**
     * Here "1" Is Default Page No
     */
    const properties = await getFliteredProperties("1", values);
    setPropertiesData(properties);
    setIsLoading(false);
  };

  useEffect(() => {
    if (router.isReady) {
      getFilteredData();
    }
    //eslint-disable-next-line
  }, [router.isReady]);

  return (
    <div>
      <Head>
        <title>Find Now</title>
        <meta
          name="description"
          content="Real Estate Site My Muhammad Uzair. Find Now"
        />
      </Head>
      {router.isReady && (
        <BreadCrumb
          text={`Search Results For (${capitalizeFirstLetter(area)})`}
        />
      )}
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

export default FindNow;
