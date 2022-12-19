import React, { useEffect, useState } from "react";
import Packages from "../../../components/common/Packages";
import { useFormik } from "formik";
import { PackagesSchema } from "../../../yupSchemas";
import CreditCardForm from "../../../components/common/CreditCardForm";
import SpinnerSmall from "../../../components/common/SpinnerSmall";
import {
  editUserPackage,
  fetchPackages,
  fetchUserProfile,
} from "../../../functions";
import { toast } from "react-toastify";
import SpinnerLarge from "../../../components/common/SpinnerLarge";

interface PackageTypes {
  _id: string;
  label: string;
  price: number;
  allowed_listings: number;
  __v: number;
}

const Package = () => {
  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  // ?State For Loading ---------------------------->
  const [isLoadingAPI, setIsLoadingAPI] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  // ?State For Packages ------------------>
  const [packages, setPackages] = useState<PackageTypes[]>([]);
  // !State For Packages ------------------>

  // ?State For User ------------------>
  const [remainingListings, setRemainingListings] = useState<number>(0);
  // !State For User ------------------>

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
      onSubmit: async (values, action) => {
        setIsLoading(true);
        const card = {
          card_no: values.card_no,
          card_cvc: values.card_cvc,
          expiry_month: values.expiry_month,
          expiry_year: values.expiry_year,
        };
        const packageId = values.package;

        const isPackageUpdated = await editUserPackage(card, packageId);

        if (isPackageUpdated.error) {
          toast.error(isPackageUpdated.msg);
          setIsLoading(false);
          return;
        }
        toast.success(isPackageUpdated.msg, {
          position: "bottom-center",
        });
        getUser();
        setIsLoading(false);
        action.resetForm();
      },
    });
  // !Configurations For Formik -------------------------->

  const getPackages = async () => {
    setIsLoadingAPI(true);
    const packages = await fetchPackages();
    setPackages(packages);
    setIsLoadingAPI(false);
  };
  const getUser = async () => {
    const user = await fetchUserProfile();
    setRemainingListings(user.remaining_listings);
  };

  useEffect(() => {
    getPackages();
    getUser();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoadingAPI ? (
        <div className="text-center h-screen flex items-center justify-center">
          <SpinnerLarge />
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <h1 className="text-3xl mx-5 poppins font-bold my-5">My Package</h1>
            <span className="bg-red-500 transition-all duration-500 hover:bg-slate-800 cursor-pointer rounded-full py-2 text-sm text-white px-4">
              {remainingListings} Listings Remaining
            </span>
          </div>

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
                  packages={packages}
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
      )}
    </>
  );
};

export default Package;
