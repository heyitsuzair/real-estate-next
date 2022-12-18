import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import PropertiesInfinite from "../components/common/PropertiesInfinite";
import SpinnerSmall from "../components/common/SpinnerSmall";
import { findProperties } from "../functions";

const Search = () => {
  const router = useRouter();

  // Query To Search ---------------->
  const { query } = router.query;
  // Query To Search ---------------->

  const [propertiesData, setPropertiesData] = useState<any>([]);

  // ?State For Loading ---------------->
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // !State For Loading ---------------->

  const fetchNextData = async () => {
    /**
     * Fetching More Data By Passing Page Number That We Got From Previous Response
     */
    const moreProperties = await findProperties(propertiesData.nextPage, query);
    setPropertiesData({
      docs: [...propertiesData.docs, ...moreProperties.docs],
      hasNextPage: moreProperties.hasNextPage,
      nextPage: moreProperties.nextPage,
    });
  };

  const searchData = async () => {
    setIsLoading(true);
    const properties = await findProperties("1", query);
    setPropertiesData(properties);
    setIsLoading(false);
  };

  useEffect(() => {
    searchData();
    //eslint-disable-next-line
  }, [query]);

  return (
    <div>
      <Head>
        <title>Search</title>
        <meta
          name="description"
          content="Real Estate Site My Muhammad Uzair. Shop"
        />
      </Head>
      <BreadCrumb text={"Search Results For " + query} />
      {isLoading ? (
        <div className="text-center">
          <SpinnerSmall />
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

export default Search;
