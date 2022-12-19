import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PropertyForm from "../../../components/common/PropertyForm";
import SpinnerLarge from "../../../components/common/SpinnerLarge";
import { fetchProperty } from "../../../functions";
import { AddPropertySchema } from "../../../yupSchemas";

const EditProperty = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
    price: "",
    after_price_label: "",
    before_price_label: "",
    area: "",
    status: "",
    type: "",
    listing_media: [],
    property_address: {
      address: "",
      lat: 0,
      lng: 0,
    },
    property_size: "",
    property_lot_size: "",
    property_rooms: "",
    property_bed_rooms: "",
    property_bath_rooms: "",
    property_garages: "",
    property_year_built: "",
    property_garages_size: "",
    property_amenities: [],
    property_floors: [
      {
        floor_heading: "",
        floor_description: "",
        floor_media: "",
      },
    ],
  });

  const getProperty = async () => {
    const property = await fetchProperty(id);
    setInitialValues(property.property);
    setIsLoading(false);
  };

  useEffect(() => {
    getProperty();
    //eslint-disable-next-line
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="text-center h-screen flex items-center justify-center">
          <SpinnerLarge />
        </div>
      ) : (
        <>
          <h1 className="text-3xl mx-5 poppins font-bold my-5">
            Edit Property
          </h1>
          <PropertyForm
            initialValues={initialValues}
            yupSchema={AddPropertySchema}
            state="update"
            property_id={id}
          />
        </>
      )}
    </>
  );
};

export default EditProperty;
