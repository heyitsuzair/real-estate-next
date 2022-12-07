import React from "react";
import Badge from "../common/Badge";
import IconBottomCard from "../common/IconBottomCard";
import TextLarge from "../common/TextLarge";

const OurAminities = () => {
  return (
    <div className="text-center mt-24 bg-white our-aminities">
      <div className="badge my-8">
        <Badge text="Our Aminities" />
      </div>
      <div className="heading my-6">
        <TextLarge text="Building Aminities" />
      </div>
      <div className="my-7 container gap-8 mx-auto grid justify-center p-4 md:p-12 grid-cols-12">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mb-8">
          <IconBottomCard
            footerIcon="fa-solid fa-arrow-right"
            headerIcon="fa-solid fa-car"
            text="Parking Space"
            link="/shop"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mb-8">
          <IconBottomCard
            footerIcon="fa-solid fa-arrow-right"
            headerIcon="fa-solid fa-water-ladder"
            text="Swimming Pool"
            link="/shop"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mb-8">
          <IconBottomCard
            footerIcon="fa-solid fa-arrow-right"
            headerIcon="fa-solid fa-shield"
            text="Private Security"
            link="/shop"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mb-8">
          <IconBottomCard
            footerIcon="fa-solid fa-arrow-right"
            headerIcon="fa-solid fa-hospital"
            text="Medical Center"
            link="/shop"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mb-8">
          <IconBottomCard
            footerIcon="fa-solid fa-arrow-right"
            headerIcon="fa-solid fa-book px-1"
            text="Library Area"
            link="/shop"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mb-8">
          <IconBottomCard
            footerIcon="fa-solid fa-arrow-right"
            headerIcon="fa-solid fa-bed"
            text="King Size Beds"
            link="/shop"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mb-8">
          <IconBottomCard
            footerIcon="fa-solid fa-arrow-right"
            headerIcon="fa-solid fa-house"
            text="Smart Homes"
            link="/shop"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mb-8">
          <IconBottomCard
            footerIcon="fa-solid fa-arrow-right"
            headerIcon="fa-solid fa-gamepad"
            text="Kid's Playland"
            link="/shop"
          />
        </div>
      </div>
    </div>
  );
};

export default OurAminities;
