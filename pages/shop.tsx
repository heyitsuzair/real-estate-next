import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import PropertiesInfinite from "../components/common/PropertiesInfinite";

import { fetchProperties } from "../functions";
import { getProperties } from "../utils/api/endPoints";

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
      <PropertiesInfinite
        fetchNextData={fetchNextData}
        propertiesData={propertiesData}
      />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  let properties = [];
  try {
    /**
     * Here "/6" Is Limit
     */
    const { data } = await axios.get(getProperties + "1" + "/6");
    properties = data;
  } catch (error: any) {
    console.log(error.response.data);
  }

  return {
    props: { properties }, // will be passed to the page component as props
  };
}

export default Shop;
