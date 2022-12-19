import React from "react";
import img from "../../assets/img/logo-og.png";
import img2 from "../../assets/img/author.jpg";
import Image from "next/image";

const PropertyPicsGrid = ({ media }: { media: string[] }) => {
  return (
    <div className="grid image-grid gap-6 grid-cols-12">
      <div className="col-span-12 lg:col-span-6 flex flex-col">
        <div className="overflow-hidden mb-8 h-[30vh] lg:h-[40vh] rounded-md">
          <img
            src={media[0]}
            alt="Loading..."
            className="hover:scale-125 transition-all duration-500 object-cover rounded-md w-full h-[30vh] lg:h-[40vh]"
          />
        </div>
        <div className="overflow-hidden h-[30vh] lg:h-[40vh] rounded-md">
          <img
            src={media[1]}
            alt="Loading..."
            className="hover:scale-125 transition-all duration-500 object-cover rounded-md w-full h-[30vh] lg:h-[40vh]"
          />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div className="overflow-hidden rounded-md h-[30vh] lg:h-[83vh] xl:h-[85vh]">
          <img
            src={media[2]}
            alt="Loading..."
            className="hover:scale-125 transition-all duration-500 object-cover rounded-md w-full h-[30vh] lg:h-[83vh] xl:h-[85vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyPicsGrid;
