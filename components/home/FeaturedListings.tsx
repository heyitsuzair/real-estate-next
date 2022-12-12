import React, { useState } from "react";
import Badge from "../common/Badge";
import TextLarge from "../common/TextLarge";
import HomeCarousel from "../subcomponents/featuredlistings/HomeCarousel";

const FeaturedListings = () => {
  return (
    <div className="text-center mt-24 py-20 bg-slate-200 featured-listings">
      <div className="badge my-8">
        <Badge text="Properites" />
      </div>
      <div className="heading my-6">
        <TextLarge text="Featured Listings" />
      </div>
      <div className="my-4 container mx-auto">
        <HomeCarousel />
      </div>
    </div>
  );
};

export default FeaturedListings;
