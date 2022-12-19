import React, { ChangeEvent } from "react";
import { AreaMenu, PropertyStatus, PropertyType } from "../../menus";
import ButtonRed from "../common/ButtonRed";
import { FindNowSchema } from "../../yupSchemas";
import { useFormik } from "formik";
import MaterialSelectWithValidation from "../common/MaterialSelectWithValidation";
import { useRouter } from "next/router";

const SearchProperty = () => {
  const router = useRouter();

  // ?Configurations For Formik -------------------------->

  const initialValues = {
    type: "",
    area: "",
    status: "",
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

  const {
    values,
    touched,
    errors,

    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: FindNowSchema,
    onSubmit: (values, action) => {
      /**
       * Push To Find Now Page
       */
      router.push(
        "/find_now?status=" +
          values.status +
          "&type=" +
          values.type +
          "&area=" +
          values.area
      );
    },
  });
  // !Configurations For Formik -------------------------->

  return (
    <div className="p-4 mb-8">
      <div className="left-0 top-87 width-90 right-0 mx-auto absolute bg-white p-10 rounded-lg search-property-box shadow-2xl shadow-slate-300 grid grid-cols-12 gap-4 items-start">
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3">
          <MaterialSelectWithValidation
            color="red"
            size="lg"
            variant="outlined"
            label="Choose Area"
            options={AreaMenu}
            onChange={handleChangeMaterialSelectArea}
            error={touched.area && errors.area}
            errorText={errors.area}
            disabled={false}
            value={values.area}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3">
          <MaterialSelectWithValidation
            color="red"
            size="lg"
            variant="outlined"
            label="Property Status"
            options={PropertyStatus}
            error={touched.status && errors.status}
            errorText={errors.status}
            onChange={handleChangeMaterialSelectStatus}
            disabled={false}
            value={values.status}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3">
          <MaterialSelectWithValidation
            color="red"
            size="lg"
            variant="outlined"
            label="Property Type"
            options={PropertyType}
            error={touched.type && errors.type}
            errorText={errors.type}
            onChange={handleChangeMaterialSelectType}
            disabled={false}
            value={values.type}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 flex">
          <ButtonRed width="full" text="Find Now" handleClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SearchProperty;
