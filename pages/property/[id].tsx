import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import SpinnerLarge from "../../components/common/SpinnerLarge";
import MainContent from "../../components/property/MainContent";
import PropertyPicCarousel from "../../components/property/PropertyPicCarousel";
import { fetchProperty } from "../../functions";

const SinglePropertyPage = () => {
  const [propertyData, setPropertyData] = useState({
    property: {
      listing_media: [""],
    },
    reviews: 0,
  });

  const router = useRouter();
  const { id } = router.query;

  const [isCommentAdded, setisCommentAdded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * Fetch Data From API Again When Comment Is Added
   */

  const getProperty = async () => {
    const property = await fetchProperty(id);
    setPropertyData(property);
    setIsLoading(false);
    /**
     * Set Is Comment Added Back To False So In Next Comment Addition It Can Be Changed So Component Will Remount Using useEffect With Updated Data ABout Owner Profile And Property Rating
     */
    setisCommentAdded(false);
  };

  useEffect(() => {
    if (router.isReady) {
      getProperty();
    }
    //eslint-disable-next-line
  }, [isCommentAdded, router.isReady]);

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
        {isLoading ? (
          <div className="mt-20 mb-40 text-center">
            <SpinnerLarge />
          </div>
        ) : (
          <>
            <PropertyPicCarousel
              property_pics={propertyData.property.listing_media}
            />
            <MainContent
              setIsCommentAdded={setisCommentAdded}
              property={propertyData.property}
              comments={propertyData.reviews}
            />
          </>
        )}
      </div>
    </>
  );
};

export default SinglePropertyPage;
