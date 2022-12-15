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
   * Retrieve Allowed Listings In Selected Package
   */
  const ALLOWED_LISTINGS = retrievePackageAllowedListings(packages, value);

  return (
    <>
      <div className="grid grid-cols-12 justify-start gap-4">
        <div className="col-span-12 md:col-span-4">
          {packages.map((item) => {
            return (
              <MaterialRadioWithLabel
                key={item._id}
                value={item._id}
                label={item.label}
                name="package"
                checked={false}
                handleChange={handleChange}
              />
            );
          })}
        </div>
      </div>
      {errors.package && touched.package && (
        <p className="text-red-500 text-sm ml-3 my-2">{errors.package}</p>
      )}
      {value && (
        <div className="allowed-listings text-sm md:text-xl ml-3 my-2">
          <strong>Selected Package Includes {ALLOWED_LISTINGS} Listings</strong>
        </div>
      )}
    </>
  );
};

export default Packages;
