import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import MainContent from "../../components/property/MainContent";
import PropertyPicCarousel from "../../components/property/PropertyPicCarousel";
import { fetchProperty } from "../../functions";

const SinglePropertyPage = ({ property }: any) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Property</title>
        <meta
          name="description"
          content="Real Estate Site My Muhammad Uzair. Property"
        />
      </Head>
      <div className="product-details">
        <BreadCrumb text="Product Details" />
        <PropertyPicCarousel property_pics={property.listing_media} />
        <MainContent property={property} />
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  /**
   * Property ID From Router Query
   */
  const { id } = context.query;

  const property = await fetchProperty(id);

  return {
    props: { property }, // will be passed to the page component as props
  };
}

export default SinglePropertyPage;
