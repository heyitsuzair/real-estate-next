import React from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import TextSemiLarge from "./TextSemiLarge";
import Home from "../../assets/img/21.png";
import Image from "next/image";

interface Proptypes {
  size: any;
  handleOpen: any;
}

const ListingsModal = ({ size, handleOpen }: Proptypes) => {
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
          onClick={() => handleOpen(null)}
          className="fa-solid fa-xmark cursor-pointer text-white text-lg px-4 py-2 rounded-full bg-red-500"
        ></i>
      </DialogHeader>
      <DialogBody className="flex flex-col items-center gap-16 lg:gap-0 justify-center lg:flex-row lg:justify-between">
        <Image
          src={Home}
          className="lg:w-80 h-80 object-contain"
          alt="Loading..."
        />
        <div className="listing-info">Hello</div>
      </DialogBody>
    </Dialog>
  );
};

export default ListingsModal;
