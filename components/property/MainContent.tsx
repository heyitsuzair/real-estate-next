import React from "react";
import BadgeFilled from "../common/BadgeFilled";
import CommentsCount from "../common/CommentsCount";
import Date from "../common/Date";
import HeadingLeftBordered from "../common/HeadingLeftBordered";
import PropertyLocation from "../common/PropertyLocation";
import TextSemiLarge from "../common/TextSemiLarge";

const MainContent = () => {
  return (
    <div className="container mx-auto px-20 pt-12 pb-32">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="meta flex gap-6 items-center">
            <BadgeFilled text="For Sale" />
            <Date date="May 19, 2022" />
            <CommentsCount totalComments={20} link="comments" />
          </div>
          <div className="property-title my-10">
            <TextSemiLarge text="Diamond Manor Apartment" />
          </div>
          <div className="property-location my-10">
            <PropertyLocation location="Lahore, Pakistan" />
          </div>
          <div className="description">
            <HeadingLeftBordered heading="Description" />
            <p className="py-10 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              dignissimos iste maxime perferendis nobis labore eos repellat.
              Consectetur, accusamus nisi?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Minus, labore! Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Dolor, modi. <br /> <br />{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              assumenda.Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Minus, labore! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Dolor, modi.
            </p>
          </div>
          <div className="property-detail">
            <HeadingLeftBordered heading="Property Detail" />
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
                        <span className="detail-key text-sm text-gray-600">
                          Baths:
                        </span>
                        <span className="detail-key text-sm text-gray-600">
                          Rooms:
                        </span>
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
                        <span className="detail-value text-sm font-semibold">
                          10
                        </span>
                        <span className="detail-value text-sm font-semibold">
                          16
                        </span>
                        <span className="detail-value text-sm font-semibold">
                          2001
                        </span>
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
                        <span className="detail-key text-sm text-gray-600">
                          Beds
                        </span>
                        <span className="detail-key text-sm text-gray-600">
                          Price
                        </span>
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
                        <span className="detail-value text-sm font-semibold">
                          10
                        </span>
                        <span className="detail-value text-sm font-semibold">
                          16
                        </span>
                        <span className="detail-value text-sm font-semibold">
                          2001
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">Hello</div>
      </div>
    </div>
  );
};

export default MainContent;
