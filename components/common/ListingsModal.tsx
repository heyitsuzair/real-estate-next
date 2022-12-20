import React from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";

import ButtonRedWithIcon from "./ButtonRedWithIcon";
import StarRating from "./StarRatings";
import { useRouter } from "next/router";
import TextSemiLarge from "./TextSemiLarge";

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
      <DialogBody className="grid gap-8 grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-6">
          <div className="img">
            <img
              src={property.listing_media[0]}
              alt="Loading..."
              className="min-h-18 rounded-md object-cover"
            />
          </div>
        </div>
        <div className="listing-info col-span-12 lg:col-span-6 flex flex-col gap-4">
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
          <div className="product-price flex items-center text-red-500">
            {property.before_price_label && (
              <span className="mt-2">{property.before_price_label}/ </span>
            )}
            <TextSemiLarge text={`Rs ${property.price}`} />
            {property.after_price_label && (
              <span className="mt-2"> /{property.after_price_label}</span>
            )}
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
