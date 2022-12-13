import React, { useState } from "react";
import Packages from "../../../components/common/Packages";
import { useFormik } from "formik";
import { PackagesSchema } from "../../../yupSchemas";
import CreditCardForm from "../../../components/common/CreditCardForm";
import SpinnerSmall from "../../../components/common/SpinnerSmall";
const Package = () => {
  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  const initialValues = {
    package: "",
    card_no: "",
    card_cvc: "",
    expiry_month: "",
    expiry_year: "",
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: PackagesSchema,
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
      <h1 className="text-3xl mx-5 poppins font-bold my-5">My Package</h1>

      <div className="m-4 shadow-xl sm:rounded-lg p-10">
        <div className="mb-5">
          <span className="text-md font-bold">Note:</span>
          <span className="text-gray-500">
            &nbsp; Updating Package Will Update Remaining Listings By Adding
            Your Remaining Listings With The New Quantity According To The
            Package You Choose
          </span>
        </div>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit}
          action="#"
        >
          <div className="-ml-3">
            <Packages
              errors={errors}
              value={values.package}
              touched={touched}
              handleChange={handleChange}
            />
          </div>
          <CreditCardForm
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
          />
          {isLoading ? (
            <div className="text-start">
              <SpinnerSmall />
            </div>
          ) : (
            <button
              type="submit"
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Update
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Package;
