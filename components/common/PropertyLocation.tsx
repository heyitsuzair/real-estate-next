import React from "react";

const PropertyLocation = ({ location }: { location: string }) => {
  return (
    <div className="location">
      <i className="fa-solid text-xl text-red-500 fa-location-dot"></i>
      <span className="area text-gray-700 text-sm mx-2"> {location}</span>
    </div>
  );
};

export default PropertyLocation;
