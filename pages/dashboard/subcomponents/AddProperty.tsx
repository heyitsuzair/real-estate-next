import React, { ChangeEvent, useState } from "react";
import TextInput from "../../../components/common/TextInput";
import { useFormik } from "formik";
import SpinnerSmall from "../../../components/common/SpinnerSmall";
import { AddPropertySchema } from "../../../yupSchemas";
import TextArea from "../../../components/common/Textarea";
import MaterialSelectWithValidation from "../../../components/common/MaterialSelectWithValidation";
import { AreaMenu, PropertyStatus, PropertyType } from "../../../menus";
import FileUpload from "../../../components/common/FileUpload";
const AddProperty = () => {
  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  // ?State For Preview Source Base64 ---------------------------->
  const [previewSource, setPreviewSource] = useState<any>([]);
  // !State For Preview Source Base64 ---------------------------->

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
    property_address: "",
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
