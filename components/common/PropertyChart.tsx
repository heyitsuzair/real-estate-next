import React from "react";

const PropertyChart = ({ property }: any) => {
  return (
    <div className="property-details-chart my-10">
      <div className="chart bg-slate-100 p-8 sm:p-0 rounded-md shadow-md">
        <div className="flex justify-evenly flex-col sm:flex-row sm:items-center">
          <div className="left">
            <div className="detail-item flex gap-14 sm:gap-8 my-4">
              <div className="detail-key flex flex-col gap-7">
                <span className="detail-key text-sm text-gray-600">
                  Home Area:
                </span>
                <span className="detail-key text-sm text-gray-600">Baths:</span>
                <span className="detail-key text-sm text-gray-600">
                  Bed Rooms:
                </span>
                <span className="detail-key text-sm text-gray-600">
                  Year Built:
                </span>
              </div>
              <div className="detail-value flex flex-col gap-7">
                <span className="detail-value text-sm font-semibold">
                  {property.property_size} SQFT
                </span>
                <span className="detail-value text-sm font-semibold">
                  {property.property_bath_rooms}
                </span>
                <span className="detail-value text-sm font-semibold">
                  {property.property_bed_rooms}
                </span>
                <span className="detail-value text-sm font-semibold">
                  {property.property_year_built}
                </span>
              </div>
            </div>
          </div>
          <div className="separator w-0.5 h-[38vh] hidden sm:flex bg-gray-300"></div>
          <div className="right">
            <div className="detail-item flex gap-8 my-4">
              <div className="detail-key flex flex-col gap-7">
                <span className="detail-key text-sm text-gray-600">
                  Lot Size:
                </span>

                <span className="detail-key text-sm text-gray-600">
                  Garages:
                </span>
                <span className="detail-key text-sm text-gray-600">
                  Garages Size:
                </span>
                <span className="detail-key text-sm text-gray-600">
                  Property Status:
                </span>
              </div>
              <div className="detail-value flex flex-col gap-7">
                <span className="detail-value text-sm font-semibold">
                  {property.property_lot_size} SQFT
                </span>

                <span className="detail-value text-sm font-semibold">
                  {property.property_garages}
                </span>
                <span className="detail-value text-sm font-semibold">
                  {property.property_garages_size} SQFT
                </span>
                <span className="detail-value text-sm font-semibold">
                  {property.status !== "sold" && "For"}{" "}
                  {property.status.charAt(0).toUpperCase() +
                    property.status.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyChart;
