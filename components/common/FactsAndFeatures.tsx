import React from "react";
import IconWithTextHeading from "./IconWithTextHeading";

const FactsAndFeatures = () => {
  return (
    <div className="features py-10 grid gap-6 grid-cols-12">
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="20 x 16 sq feet"
          heading="Living Room"
          Icon="fa-solid fa-house"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="20 x 16 sq feet"
          heading="Garage"
          Icon="fa-solid fa-car px-0.5"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="20 x 16 sq feet"
          heading="Dinning Area"
          Icon="fa-solid fa-spoon"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="20 x 16 sq feet"
          heading="Bedroom"
          Icon="fa-solid fa-bed"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="20 x 16 sq feet"
          heading="Bathroom"
          Icon="fa-solid fa-bath"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="20 x 16 sq feet"
          heading="Gym Area"
          Icon="fa-solid fa-dumbbell"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="20 x 16 sq feet"
          heading="Garden"
          Icon="fa-solid fa-worm px-0.5"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="20 x 16 sq feet"
          heading="Parking"
          Icon="fa-solid fa-square-parking px-0.5"
        />
      </div>
    </div>
  );
};

export default FactsAndFeatures;
