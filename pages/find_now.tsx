import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import PropertiesInfinite from "../components/common/PropertiesInfinite";

import { fetchProperties, getFliteredProperties } from "../functions";
import { capitalizeFirstLetter } from "../utils";

const FindNow = ({ properties }: any) => {
  const router = useRouter();
  const { area } = router.query;
  const { status } = router.query;
  const { type } = router.query;

  const [propertiesData, setPropertiesData] = useState(properties);

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

  return (
    <div>
      <Head>
        <title>Find Now</title>
        <meta
          name="description"
          content="Real Estate Site My Muhammad Uzair. Find Now"
        />
      </Head>
      <BreadCrumb
        text={`Search Results For (${capitalizeFirstLetter(area)})`}
      />
      {propertiesData.docs.length > 0 ? (
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

export async function getServerSideProps(context: any) {
  const { area } = context.query;
  const { status } = context.query;
  const { type } = context.query;

  const values = {
    area,
    status,
    type,
  };

  /**
   * Here "1" Is Default Page No
   */
  const properties = await getFliteredProperties("1", values);

  return {
    props: { properties }, // will be passed to the page component as props
  };
}

export default FindNow;
