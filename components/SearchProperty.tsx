import React from "react";
import styles from "../styles/SearchProperty.module.css";
import MaterialSelect from "./common/MaterialSelect";
import { AreaMenu, PropertyStatus, PropertyType } from "../menus";

const SearchProperty = () => {
  return (
    <div className="p-4 mb-8">
      <div
        className={`${styles.searchBox} bg-white p-10 rounded-lg search-property-box shadow-2xl shadow-slate-300 mx-40 grid grid-cols-12 gap-4 items-center`}
      >
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 text-center">
          <MaterialSelect
            color="red"
            size="lg"
            variant="outlined"
            label="Choose Area"
            options={AreaMenu}
            change=""
            disabled={false}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 text-center">
          <MaterialSelect
            color="red"
            size="lg"
            variant="outlined"
            label="Property Status"
            options={PropertyStatus}
            change=""
            disabled={false}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 text-center">
          <MaterialSelect
            color="red"
            size="lg"
            variant="outlined"
            label="Property Type"
            options={PropertyType}
            change=""
            disabled={false}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 text-center flex">
          <button
            className="bg-red-500 hover:bg-slate-800 transition-all tracking-wider rounded p-3 w-full text-white"
            style={{ padding: ".6rem" }}
          >
            Find Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchProperty;
