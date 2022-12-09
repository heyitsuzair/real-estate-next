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
}

const ListingsModal = ({ size, handleOpen }: Proptypes) => {
  const router = useRouter();

  // ?Handle When Someone Clicks On See Full Info Button ---------------->
  const handleVisitListing = () => {
    router.push("/property/1");
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
        <Image
          src={Home}
          className="lg:w-80 h-80 object-contain"
          alt="Loading..."
        />
        <div className="listing-info flex flex-col w-full gap-3">
          <div className="w-64">
            <StarRating rating={2.403} reviews={95} />
          </div>
          <div className="product-name text-black">
            <h1 className="text-2xl poppins font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
          </div>
          <div className="product-price text-red-500">
            <TextLarge text="Rs 20000" />
          </div>
          <div className="product-categories border-y-2 py-4 poppins border-gray-300">
            <span className="text-md">
              <strong className="text-black">Categories:</strong> &nbsp;
              <span>mppwdmwdpmw</span>
              <span>mppwdmwdpmw</span>
            </span>
          </div>
          <div className="product-link poppins flex gap-6">
            <div className="font-semibold">
              <ButtonRedWithIcon
                text="See Full Info"
                width="inherit"
                icon="fa-solid fa-arrow-up-right-from-square"
                iconPosition="right"
                handleClick={() => handleVisitListing()}
              />
            </div>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default ListingsModal;
