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
import FloorTabs from "../common/FloorTabs";
import StarRating from "../common/StarRatings";
import Comment from "../common/Comment";
import AddReviewForm from "../common/AddReviewForm";

const MainContent = ({ property }: any) => {
  /**
   * Capitalize First Letter
   */
  const status =
    property.status.charAt(0).toUpperCase() + property.status.slice(1);

  return (
    <div className="container mx-auto px-7 pt-2 lg:px-14 lg:pt-12 pb-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 order-2 xl:order-1 xl:col-span-8">
          <div className="meta flex flex-col sm:flex-row gap-6 items-center">
            <BadgeFilled
              text={`${property.status !== "sold" ? "For" : ""} ${status}`}
            />
            <Date date={property.updatedAt} />
            <CommentsCount
              totalComments={property.property_total_reviews}
              link="comments"
            />
          </div>
          <div className="property-title my-10">
            <TextSemiLarge text={property.title} />
          </div>
          <div className="property-location my-10">
            <PropertyLocation location={property.property_address} />
          </div>
          <div className="description">
            <HeadingLeftBordered heading="Description" />
            <p className="py-10 text-slate-500">{property.description}</p>
          </div>
          <div className="property-detail">
            <HeadingLeftBordered heading="Property Detail" />
            <PropertyChart property={property} />
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
              <Map
                zoom={11}
                height="400px"
                center={{
                  lat: 31.5204,
                  lng: 74.3587,
                }}
              />
            </div>
          </div>
          <div className="property-floors">
            <HeadingLeftBordered heading="Floor Plans" />
            <div className="my-10">
              <FloorTabs />
            </div>
          </div>
          <div className="property-reviews" id="comments">
            <HeadingLeftBordered heading="Customer Reviews" />
            <div className="my-10 grid grid-cols-12">
              <div className="col-span-12">
                <StarRating justify="justify-start" rating={4.5} reviews={10} />
              </div>
            </div>
            <Comment />
            <Comment />
            <Comment />
          </div>
          <div className="property-add-review my-10">
            <AddReviewForm propertyId={1} />
          </div>
        </div>
        <div className="col-span-12 order-1 xl:order-2 xl:col-span-4">
          <OwnerProfile
            ownerHobby="Property Seller"
            ownerName="Muhammad Uzair"
            isSticky={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
