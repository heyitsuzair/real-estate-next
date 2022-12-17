import Head from "next/head";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BreadCrumb from "../components/common/BreadCrumb";
import ListingsCard from "../components/common/ListingsCard";
import SpinnerSmall from "../components/common/SpinnerSmall";
import { fetchProperties } from "../functions";

const Shop = ({ properties }: any) => {
  const [propertiesData, setPropertiesData] = useState(properties);

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
      <InfiniteScroll
        dataLength={propertiesData.docs.length} //This is important field to render the next data
        next={fetchNextData}
        hasMore={propertiesData.hasNextPage}
        loader={
          <div className="text-center mb-36 -mt-28">
            <SpinnerSmall />
          </div>
        }
        endMessage={
          <h1 className="text-center text-2xl font-semibold mb-36 -mt-28">
            <i
              className="fa fa-check cursor-pointer text-xl border-2 mb-5 text-green-500 border-green-500 py-2 px-3 rounded-full"
              aria-hidden="true"
            ></i>{" "}
            You{`'`}re All Caught Up
          </h1>
        }
      >
        <div className="listings md:px-4 gap-8 lg:gap-4 justify-center pt-32 mb-32 grid grid-cols-12">
          {propertiesData.docs.map((property: any) => {
            return (
              <div
                key={property._id}
                className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12"
              >
                <ListingsCard />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const properties = await fetchProperties("1");

  return {
    props: { properties }, // will be passed to the page component as props
  };
}

export default Shop;
