import React from "react";
import { retrievePackageAllowedListings } from "../../functions";
import MaterialRadioWithLabel from "./MaterialRadioWithLabel";

interface PropTypes {
  handleChange: any;
  errors: any | undefined;
  touched: any | undefined;
  value: string;
  packages: {
    _id: string;
    label: string;
    price: number;
    allowed_listings: number;
    __v: number;
  }[];
}

const Packages = ({
  handleChange,
  errors,
  touched,
  value,
  packages,
}: PropTypes) => {
  /**
   * Retrieve Allowed Listings And Price Of Selected Package
   */
  const retrievedPackage = retrievePackageAllowedListings(packages, value);

  return (
    <>
      <div className="grid grid-cols-12 justify-start gap-4">
        {packages.map((item) => {
          return (
            <div key={item._id} className="col-span-12 md:col-span-4">
              <MaterialRadioWithLabel
                value={item._id}
                label={item.label}
                name="package"
                checked={false}
                handleChange={handleChange}
              />
            </div>
          );
        })}
      </div>
      {errors.package && touched.package && (
        <p className="text-red-500 text-sm ml-3 my-2">{errors.package}</p>
      )}
      {value && (
        <div className="allowed-listings text-center text-sm md:text-xl ml-3 my-2">
          <strong>
            Includes {retrievedPackage.allowed_listings} Listings (Rs{" "}
            {retrievedPackage.price})
          </strong>
        </div>
      )}
    </>
  );
};

export default Packages;
