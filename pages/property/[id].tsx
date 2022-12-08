import { useRouter } from "next/router";
import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import MainContent from "../../components/property/MainContent";
import PropertyPicCarousel from "../../components/property/PropertyPicCarousel";

const SinglePropertyPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="product-details">
      <BreadCrumb text="Product Details" />
      <PropertyPicCarousel />
      <MainContent />
    </div>
  );
};

export default SinglePropertyPage;
