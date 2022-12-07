import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import StarRatings from "react-star-ratings";
import Home from "../../assets/img/21.png";
import Image from "next/image";
import TextLarge from "./TextLarge";
import ButtonRedWithIcon from "./ButtonRedWithIcon";

interface Proptypes {
  size: any;
  handleOpen: any;
}

const ListingsModal = ({ size, handleOpen }: Proptypes) => {
  // State For Quantity ---------------------->
  const [quantity, setQuantity] = useState(1);
  // State For Quantity ---------------------->

  // ?Handle When Someone Clicks On Plus Button ------------------->
  const handleQuantityPlus = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };
  // !Handle When Someone Clicks On Plus Button ------------------->

  // ?Handle When Someone Clicks On Minus Button ------------------->
  const handleQuantityMinus = () => {
    /**
     * If Quantity Is "1" Prevent User From Going In Negative Value
     */

    if (quantity === 1) {
      return;
    }

    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };
  // !Handle When Someone Clicks On Minus Button ------------------->

  // ?Function To Add Item Into Cart ---------------------------->
  const handleAddToCart = () => {
    console.log("Add To Cart");
  };
  // !Function To Add Item Into Cart ---------------------------->

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
          <div className="ratings flex items-center">
            <StarRatings
              rating={2.403}
              starRatedColor="red"
              starDimension="25px"
              starSpacing="1px"
            />
            <span className="ml-2 poppins text-red-500">(95 Reviews)</span>
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
          <div className="product-add-to-cart poppins flex gap-6">
            <div className="quantity flex items-center gap-3">
              <span
                className="bg-red-500 rounded-full text-white px-3.5 py-2 cursor-pointer"
                onClick={() => handleQuantityMinus()}
              >
                <i className="fa fa-minus" aria-hidden="true"></i>
              </span>
              <span className="font-semibold text-black min-w-2 text-center">
                {quantity}
              </span>
              <span
                className="bg-red-500 rounded-full text-white px-3.5 py-2 cursor-pointer"
                onClick={() => handleQuantityPlus()}
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
              </span>
            </div>
            <div className="add-to-cart font-semibold">
              <ButtonRedWithIcon
                text="Add To Cart"
                width="inherit"
                icon="fa-solid fa-shopping-cart"
                iconPosition="left"
                handleClick={() => handleAddToCart()}
              />
            </div>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default ListingsModal;
