import React from "react";
import PropertyForm from "../../../components/common/PropertyForm";
import { AddPropertySchema } from "../../../yupSchemas";

const AddProperty = () => {
  const initialValues = {
    title: "",
    description: "",
    price: "",
    after_price_label: "",
    before_price_label: "",
    area: "",
    status: "",
    type: "",
    listing_media: [],
    property_place_id: "",
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
  };

  return (
    <>
      <h1 className="text-3xl mx-5 poppins font-bold my-5">Add Property</h1>
      <PropertyForm
        initialValues={initialValues}
        yupSchema={AddPropertySchema}
        state="add"
        property_id={undefined}
        imgSources={
          [
            // "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1",
          ]
        }
      />
    </>
  );
};

export default AddProperty;
