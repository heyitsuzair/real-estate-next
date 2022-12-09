import React from "react";
import BadgeFilled from "../common/BadgeFilled";
import CommentsCount from "../common/CommentsCount";
import Date from "../common/Date";
import HeadingLeftBordered from "../common/HeadingLeftBordered";
import OwnerProfile from "../common/OwnerProfile";
import PropertyChart from "../common/PropertyChart";
import PropertyLocation from "../common/PropertyLocation";
import PropertyPicsGrid from "../common/PropertyPicsGrid";
import TextSemiLarge from "../common/TextSemiLarge";
import { AminitiesCheckbox } from "../../checkboxes";
import MaterialCheckbox from "../common/MaterialCheckbox";
import FactsAndFeatures from "../common/FactsAndFeatures";
import Map from "../common/Map";

const MainContent = () => {
  return (
    <div className="container mx-auto px-7 pt-2 lg:px-14 lg:pt-12 pb-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 order-2 xl:order-1 xl:col-span-8">
          <div className="meta flex flex-col sm:flex-row gap-6 items-center">
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
            <PropertyChart />
          </div>
          <div className="property-facts-features">
            <HeadingLeftBordered heading="Facts And Features" />
            <FactsAndFeatures />
          </div>
          <div className="property-from-gallery">
            <HeadingLeftBordered heading="From Our Gallery" />
            <div className="my-10">
              <PropertyPicsGrid />
            </div>
          </div>
          <div className="property-from-gallery">
            <HeadingLeftBordered heading="Amenities" />
            <div className="my-7">
              <div className="amenities-checkboxes -ml-3 grid grid-cols-12">
                {AminitiesCheckbox.map((checkbox) => {
                  return (
                    <div
                      className="col-span-12 md:col-span-4"
                      key={checkbox.value}
                    >
                      <MaterialCheckbox
                        name={checkbox.name}
                        value={checkbox.value}
                        checked={true}
                        handleChange={undefined}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="property-location">
            <HeadingLeftBordered heading="Location" />
            <div className="my-10">
              <Map />
            </div>
          </div>
        </div>
        <div className="col-span-12 order-1 xl:order-2 xl:col-span-4">
          <OwnerProfile
            ownerBio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      facilis nobis veritatis. Aspernatur eaque ut labore harum,
      excepturi corporis ea."
            ownerHobby="Traveler/Photography"
            ownerName="Muhammad Uzair"
            isSticky={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
