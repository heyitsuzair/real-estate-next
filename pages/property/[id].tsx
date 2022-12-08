import { useRouter } from "next/router";
import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb";

const SinglePropertyPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="product-details">
      <BreadCrumb text="Product Details" />
    </div>
  );
};

export default SinglePropertyPage;
