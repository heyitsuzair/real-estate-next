import React from "react";
import SpinnerSmall from "./SpinnerSmall";
import InfiniteScroll from "react-infinite-scroll-component";
import ListingsCard from "./ListingsCard";

const PropertiesInfinite = ({ propertiesData, fetchNextData }: any) => {
  return (
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
            className="fa fa-check cursor-pointer text-xl border-2 mb-5 text-red-500 border-red-500 py-2 px-3 rounded-full"
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
              <ListingsCard property={property} />
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default PropertiesInfinite;
