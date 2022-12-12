import React from "react";
import MaterialRadioWithLabel from "./MaterialRadioWithLabel";

interface PropTypes {
  handleChange: any;
  errors: any | undefined;
  touched: any | undefined;
  value: string;
}

const Packages = ({ handleChange, errors, touched, value }: PropTypes) => {
  return (
    <>
      <div className="grid grid-cols-12 justify-start gap-4">
        <div className="col-span-12 md:col-span-4">
          <MaterialRadioWithLabel
            value="1"
            label="Standard"
            name="package"
            checked={false}
            handleChange={handleChange}
          />
        </div>
        <div className="col-span-12 md:col-span-4">
          <MaterialRadioWithLabel
            value="2"
            label="Professional"
            name="package"
            checked={false}
            handleChange={handleChange}
          />
        </div>
        <div className="col-span-12 md:col-span-4">
          <MaterialRadioWithLabel
            value="3"
            label="Premium"
            name="package"
            checked={false}
            handleChange={handleChange}
          />
        </div>
      </div>
      {errors.package && touched.package && (
        <p className="text-red-500 text-sm ml-3 my-2">{errors.package}</p>
      )}
      {value && (
        <div className="allowed-listings text-sm md:text-xl ml-3 my-2">
          <strong>Selected Package Includes 10 Listings</strong>
        </div>
      )}
    </>
  );
};

export default Packages;
