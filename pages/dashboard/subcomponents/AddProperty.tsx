import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import TextInput from "../../../components/common/TextInput";
import { useFormik } from "formik";
import SpinnerSmall from "../../../components/common/SpinnerSmall";
import { AddPropertySchema } from "../../../yupSchemas";
import TextArea from "../../../components/common/Textarea";
import MaterialSelectWithValidation from "../../../components/common/MaterialSelectWithValidation";
import { AreaMenu, PropertyStatus, PropertyType } from "../../../menus";
import FileUpload from "../../../components/common/FileUpload";
import GooglePlacesAutoComplete from "../../../components/common/GooglePlacesAutoComplete";
import MaterialCheckbox from "../../../components/common/MaterialCheckbox";
import { AminitiesCheckbox } from "../../../checkboxes";

const AddProperty = () => {
  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  // ?State For Preview Source Base64 ---------------------------->
  const [previewSource, setPreviewSource] = useState<any>([]);
  // !State For Preview Source Base64 ---------------------------->

  // ?State For Amenities Checkbox ---------------------------->
  const [amenities, setAmenites] = useState<any>({
    airConditioning: false,
    bbq: false,
    refrigerator: false,
    gym: false,
    recreation: false,
    windowCoverings: false,
    microwave: false,
    washer: false,
    swimmingPool: false,
    basketballCout: false,
    security: false,
    wifi: false,
  });
  // !State For Amenities Checkbox ---------------------------->

  // ?Configurations For Formik -------------------------->
  const initialValues = {
    title: "",
    description: "",
    price: "",
    after_price_label: "",
    before_price_label: "",
    area: "",
    status: "",
    type: "",
    listing_media: "",
    property_place_id: "",
    property_size: "",
    property_lot_size: "",
    property_rooms: "",
    property_bed_rooms: "",
    property_bath_rooms: "",
    property_garages: "",
    property_year_built: "",
    property_garages_size: "",
    property_amenities: "",
  };

  // ?Handle When Values Of Material Select With Validation Changes -------------->
  const handleChangeMaterialSelectArea = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setFieldValue("area", e);
  };
  const handleChangeMaterialSelectStatus = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setFieldValue("status", e);
  };
  const handleChangeMaterialSelectType = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setFieldValue("type", e);
  };
  // !Handle When Values Of Material Select With Validation Changes -------------->

  // ?Handle When Value Of Google Places Autocomplete Change -------------->
  const handleAddressChange = (e: any) => {
    setFieldValue("property_place_id", e.value.place_id);
  };
  // !Handle When Value Of Google Places Autocomplete Change -------------->

  // ?Handle When Amenities Checkbox Changes --------------------->

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      // Find The Key By Name And Update The Value Accordingly
      setAmenites({ ...amenities, [e.target.name]: true });
      setFieldValue("property_amenities", {
        ...amenities,
        [e.target.name]: true,
      });
    } else {
      // Find The Key By Name And Update The Value Accordingly
      setAmenites({ ...amenities, [e.target.name]: false });
      setFieldValue("property_amenities", {
        ...amenities,
        [e.target.name]: false,
      });
    }
  };

  // !Handle When Amenities Checkbox Changes --------------------->

  // ?Handle When Listing Media Changes -------------->

  const previewFiles = (files: FileList | null) => {
    let filesArray: any = [];
    if (files !== null) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onloadend = () => {
          filesArray.push(reader.result);
          setPreviewSource(filesArray);
          setFieldValue("listing_media", filesArray);
        };
      }
    }
  };

  const handleChangeListingMedia = (e: ChangeEvent<HTMLInputElement>) => {
    let files: FileList | null = e.target.files;

    previewFiles(files);
  };
  // !Handle When Listing Media Changes -------------->

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: AddPropertySchema,
    onSubmit: (values, action) => {
      setIsLoading(true);
      console.log(values);
      setTimeout(() => {
        setIsLoading(false);
        action.resetForm();
        setPreviewSource([]);
      }, 2000);
    },
  });
  // !Configurations For Formik -------------------------->

  return (
    <>
      <h1 className="text-3xl mx-5 poppins font-bold my-5">Add Property</h1>
      <div className="m-4 shadow-xl sm:rounded-lg p-10">
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit}
          action="#"
        >
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-12">
              <TextInput
                id="title"
                type="text"
                name="title"
                label="Property Title"
                value={values.title}
                error={errors.title && touched.title}
                errorText={errors.title}
                onBlur={handleBlur}
                placeholder="Title*"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-12">
              <TextArea
                id="description"
                name="description"
                label="Property Description"
                value={values.description}
                error={errors.description && touched.description}
                errorText={errors.description}
                onBlur={handleBlur}
                placeholder="Description*"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-12">
              <TextInput
                id="price"
                type="number"
                name="price"
                label="Property Price (In Rs)"
                value={values.price}
                error={errors.price && touched.price}
                errorText={errors.price}
                onBlur={handleBlur}
                placeholder="Price*"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-6">
              <TextInput
                id="after_price_label"
                type="text"
                name="after_price_label"
                label="Property After Price Label"
                value={values.after_price_label}
                error={errors.after_price_label && touched.after_price_label}
                errorText={errors.after_price_label}
                onBlur={handleBlur}
                placeholder="(ex: /month)"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-6">
              <TextInput
                id="before_price_label"
                type="text"
                name="before_price_label"
                label="Property Before Price Label"
                value={values.before_price_label}
                error={errors.before_price_label && touched.before_price_label}
                errorText={errors.before_price_label}
                onBlur={handleBlur}
                placeholder="(ex: from)"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-4">
              <MaterialSelectWithValidation
                variant="outlined"
                color="red"
                size="lg"
                label="Select Area"
                disabled={false}
                value={values.area}
                onChange={handleChangeMaterialSelectArea}
                error={errors.area && touched.area}
                errorText={errors.area}
                options={AreaMenu}
              />
            </div>
            <div className="col-span-4">
              <MaterialSelectWithValidation
                variant="outlined"
                color="red"
                size="lg"
                label="Select Status"
                disabled={false}
                value={values.status}
                onChange={handleChangeMaterialSelectStatus}
                error={errors.status && touched.status}
                errorText={errors.status}
                options={PropertyStatus}
              />
            </div>
            <div className="col-span-4">
              <MaterialSelectWithValidation
                variant="outlined"
                color="red"
                size="lg"
                label="Select Type"
                disabled={false}
                value={values.type}
                onChange={handleChangeMaterialSelectType}
                error={errors.type && touched.type}
                errorText={errors.type}
                options={PropertyType}
              />
            </div>

            <div className="col-span-4">
              <TextInput
                id="property_size"
                type="number"
                name="property_size"
                label="Property Size* (In SQFT)"
                value={values.property_size}
                error={errors.property_size && touched.property_size}
                errorText={errors.property_size}
                onBlur={handleBlur}
                placeholder="Property Size"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-4">
              <TextInput
                id="property_lot_size"
                type="number"
                name="property_lot_size"
                label="Property Lot Size* (In SQFT)"
                value={values.property_lot_size}
                error={errors.property_lot_size && touched.property_lot_size}
                errorText={errors.property_lot_size}
                onBlur={handleBlur}
                placeholder="Property Lot Size"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-4">
              <TextInput
                id="property_rooms"
                type="number"
                name="property_rooms"
                label="Property Rooms* (In Numbers)"
                value={values.property_rooms}
                error={errors.property_rooms && touched.property_rooms}
                errorText={errors.property_rooms}
                onBlur={handleBlur}
                placeholder="Total Rooms"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-4">
              <TextInput
                id="property_bed_rooms"
                type="number"
                name="property_bed_rooms"
                label="Property Bed Rooms* (In Numbers)"
                value={values.property_bed_rooms}
                error={errors.property_bed_rooms && touched.property_bed_rooms}
                errorText={errors.property_bed_rooms}
                onBlur={handleBlur}
                placeholder="Total Bedrooms"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-4">
              <TextInput
                id="property_bath_rooms"
                type="number"
                name="property_bath_rooms"
                label="Property Bath Rooms* (In Numbers)"
                value={values.property_bath_rooms}
                error={
                  errors.property_bath_rooms && touched.property_bath_rooms
                }
                errorText={errors.property_bath_rooms}
                onBlur={handleBlur}
                placeholder="Total Bathrooms"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-4">
              <TextInput
                id="property_garages"
                type="number"
                name="property_garages"
                label="Property Garages* (In Numbers)"
                value={values.property_garages}
                error={errors.property_garages && touched.property_garages}
                errorText={errors.property_garages}
                onBlur={handleBlur}
                placeholder="Total Garages"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-4">
              <TextInput
                id="property_year_built"
                type="number"
                name="property_year_built"
                label="Property Year Built*"
                value={values.property_year_built}
                error={
                  errors.property_year_built && touched.property_year_built
                }
                errorText={errors.property_year_built}
                onBlur={handleBlur}
                placeholder="Year Built"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-4">
              <TextInput
                id="property_garages_size"
                type="number"
                name="property_garages_size"
                label="Property Garages Size* (In SQFT)"
                value={values.property_garages_size}
                error={
                  errors.property_garages_size && touched.property_garages_size
                }
                errorText={errors.property_garages_size}
                onBlur={handleBlur}
                placeholder="Garages Size"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-12">
              <h1 className="text-3xl my-5 font-bold">Amenities</h1>
              <div className="amenities-checkboxes -ml-3 grid grid-cols-12">
                {AminitiesCheckbox.map((checkbox) => {
                  return (
                    <div
                      className="col-span-12 md:col-span-4"
                      key={checkbox.value}
                    >
                      <MaterialCheckbox
                        name={checkbox.name}
                        value={checkbox.value}
                        checked={amenities[checkbox.name]}
                        handleChange={handleCheckboxChange}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="col-span-12">
                {errors.property_amenities && touched.property_amenities && (
                  <p className="text-red-500">{errors.property_amenities}</p>
                )}
              </div>
            </div>

            <div className="col-span-12 pt-1">
              <GooglePlacesAutoComplete
                label="Property Address*"
                error={errors.property_place_id && touched.property_place_id}
                errorText={errors.property_place_id}
                handleOnChange={handleAddressChange}
              />
            </div>
            <div className="col-span-12">
              <FileUpload
                id="listing_media"
                label="Upload Media"
                name="listing_media"
                previewSource={previewSource}
                onChange={handleChangeListingMedia}
                error={errors.listing_media && touched.listing_media}
                errorText={errors.listing_media}
              />
            </div>
          </div>
          {isLoading ? (
            <div className="text-start">
              <SpinnerSmall />
            </div>
          ) : (
            <button
              type="submit"
              className="text-white bg-red-500 hover:bg-red-600 focus:outline-none font-medium rounded-lg text-sm px-8 py-2.5 text-center flex items-center gap-2"
            >
              <span>Add Property</span>
              <i className="fa fa-plus-circle mt-0.5" aria-hidden="true"></i>
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AddProperty;
