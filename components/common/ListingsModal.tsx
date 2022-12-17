import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import StarRatings from "react-star-ratings";
import Home from "../../assets/img/21.png";
import Image from "next/image";
import TextLarge from "./TextLarge";
import ButtonRedWithIcon from "./ButtonRedWithIcon";
import StarRating from "./StarRatings";
import { useRouter } from "next/router";

interface Proptypes {
  size: any;
  handleOpen: any;
  property: any;
}

const ListingsModal = ({ size, handleOpen, property }: Proptypes) => {
  const router = useRouter();

  // ?Handle When Someone Clicks On See Full Info Button ---------------->
  const handleVisitListing = (id: string) => {
    router.push("/property/" + id);
  };
  // !Handle When Someone Clicks On See Full Info Button ---------------->

  return (
    <Dialog
      open={
        size === "xs" ||
        size === "sm" ||
        size === "md" ||
        size === "lg" ||
        size === "xl" ||
        size === "xxl"
      }
      size={size}
      handler={handleOpen}
    >
      <DialogHeader className="flex poppins justify-between">
        <h1 className="font-semibold text-2xl">Product Information</h1>
        <i
          onClick={(e) => handleOpen(null, e)}
          className="fa-solid fa-xmark cursor-pointer text-white text-lg px-4 py-2 rounded-full bg-red-500"
        ></i>
      </DialogHeader>
      <DialogBody className="flex flex-col items-start gap-16 lg:gap-8 justify-center lg:flex-row lg:justify-start lg:items-center">
        <div className="image h-full">
          <img
            src={property.listing_media[0]}
            alt="Loading..."
            className="min-h-18 rounded-md object-cover"
          />
        </div>
        <div className="listing-info flex flex-col w-full gap-3">
          <div className="w-64">
            <StarRating
              justify="justify-start"
              rating={property.property_average_rating}
              reviews={property.property_total_reviews}
            />
          </div>
          <div className="product-name text-black">
            <h1 className="text-2xl poppins font-semibold">{property.title}</h1>
          </div>
          <div className="product-price text-red-500">
            <TextLarge text={`Rs ${property.price}`} />
          </div>
          <div className="product-categories border-y-2 py-4 poppins border-gray-300">
            <span className="text-md">
              <strong className="text-black">Seller:</strong> &nbsp;
              <span>{property.seller_id.name}</span>
            </span>
          </div>
          <div className="product-link poppins flex gap-6">
            <div className="font-semibold">
              <ButtonRedWithIcon
                text="See Full Info"
                width="inherit"
                icon="fa-solid fa-arrow-up-right-from-square"
                iconPosition="right"
                handleClick={() => handleVisitListing(property._id)}
              />
            </div>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default ListingsModal;
