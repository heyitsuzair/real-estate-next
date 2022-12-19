import React from "react";
import IconWithTextHeading from "./IconWithTextHeading";

const FactsAndFeatures = () => {
  return (
    <div className="features py-10 grid gap-6 grid-cols-12">
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Living Room"
          Icon="fa-solid fa-house"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Garage"
          Icon="fa-solid fa-car px-0.5"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Dinning Area"
          Icon="fa-solid fa-spoon"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Bedroom"
          Icon="fa-solid fa-bed"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Bathroom"
          Icon="fa-solid fa-bath"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Gym Area"
          Icon="fa-solid fa-dumbbell"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Garden"
          Icon="fa-solid fa-worm px-0.5"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mb-7">
        <IconWithTextHeading
          text="Available"
          heading="Parking"
          Icon="fa-solid fa-square-parking px-0.5"
        />
      </div>
    </div>
  );
};

export default FactsAndFeatures;
