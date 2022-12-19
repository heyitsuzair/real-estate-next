import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import MainContent from "../../components/property/MainContent";
import PropertyPicCarousel from "../../components/property/PropertyPicCarousel";
import { fetchProperty } from "../../functions";

const SinglePropertyPage = ({ property }: any) => {
  const [propertyData, setPropertyData] = useState(property);

  const router = useRouter();
  const { id } = router.query;

  const [isCommentAdded, setisCommentAdded] = useState<boolean>(false);

  /**
   * Fetch Data From API Again When Comment Is Added
   */

  const getProperty = async () => {
    const property = await fetchProperty(id);
    setPropertyData(property);
    /**
     * Set Is Comment Added Back To False So In Next Comment Addition It Can Be Changed So Component Will Remount Using useEffect With Updated Data ABout Owner Profile And Property Rating
     */
    setisCommentAdded(false);
  };

  useEffect(() => {
    getProperty();
    //eslint-disable-next-line
  }, [isCommentAdded]);

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
        <MainContent
          setIsCommentAdded={setisCommentAdded}
          property={propertyData}
        />
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
