import React from "react";

const PropertyChart = () => {
  return (
    <div className="property-details-chart my-10">
      <div className="chart bg-slate-100 rounded-md shadow-md">
        <div className="flex justify-evenly items-center">
          <div className="left">
            <div className="detail-item flex gap-8 my-4">
              <div className="detail-key flex flex-col gap-7">
                <span className="detail-key text-sm text-gray-600">
                  Property ID:
                </span>
                <span className="detail-key text-sm text-gray-600">
                  Home Area:
                </span>
                <span className="detail-key text-sm text-gray-600">Baths:</span>
                <span className="detail-key text-sm text-gray-600">Rooms:</span>
                <span className="detail-key text-sm text-gray-600">
                  Year Built:
                </span>
              </div>
              <div className="detail-value flex flex-col gap-7">
                <span className="detail-value text-sm font-semibold">
                  051151
                </span>
                <span className="detail-value text-sm font-semibold">
                  150 SQFT
                </span>
                <span className="detail-value text-sm font-semibold">10</span>
                <span className="detail-value text-sm font-semibold">16</span>
                <span className="detail-value text-sm font-semibold">2001</span>
              </div>
            </div>
          </div>
          <div className="separator w-0.5 h-[45vh] bg-gray-300"></div>
          <div className="right">
            <div className="detail-item flex gap-8 my-4">
              <div className="detail-key flex flex-col gap-7">
                <span className="detail-key text-sm text-gray-600">
                  Lot Area:
                </span>
                <span className="detail-key text-sm text-gray-600">
                  Lot Dimension
                </span>
                <span className="detail-key text-sm text-gray-600">Beds</span>
                <span className="detail-key text-sm text-gray-600">Price</span>
                <span className="detail-key text-sm text-gray-600">
                  Property Status
                </span>
              </div>
              <div className="detail-value flex flex-col gap-7">
                <span className="detail-value text-sm font-semibold">
                  051151
                </span>
                <span className="detail-value text-sm font-semibold">
                  150 SQFT
                </span>
                <span className="detail-value text-sm font-semibold">10</span>
                <span className="detail-value text-sm font-semibold">16</span>
                <span className="detail-value text-sm font-semibold">2001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyChart;
