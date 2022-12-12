import * as Yup from "yup";

export const AddPropertySchema = Yup.object({
  title: Yup.string().required("Please Enter Property Title!"),
  description: Yup.string().required("Please Enter Property Description!"),
  price: Yup.number().required("Please Enter Property Price!"),
  after_price_label: Yup.string(),
  before_price_label: Yup.string(),
  area: Yup.string().required("Please Choose Property Area!"),
  status: Yup.string().required("Please Choose Property Status!"),
  type: Yup.string().required("Please Choose Property Type!"),
  listing_media: Yup.array().required(
    "Please Upload Listing Media (Pictures)!"
  ),
  property_place_id: Yup.string().required("Please Enter Property Address!"),
  property_size: Yup.string().required("Please Enter Property Size!"),
  property_lot_size: Yup.string().required("Please Enter Property Lot Size!"),
  property_rooms: Yup.number().required("Please Enter Total Rooms!"),
  property_bed_rooms: Yup.number().required("Please Enter Total Bedrooms!"),
  property_bath_rooms: Yup.number().required("Please Enter Total Bathrooms!"),
  property_garages: Yup.number().required("Please Enter Total Garages!"),
  property_year_built: Yup.string().required(
    "Please Enter Property Year Built!"
  ),
  property_garages_size: Yup.string().required(
    "Please Enter Property Garages Sizes!"
  ),
  property_amenities: Yup.array().required("Please Choose Property Amenities!"),
});
