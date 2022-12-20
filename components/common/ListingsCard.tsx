import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Home from "../../assets/img/21.png";
import Author from "../../assets/img/author.jpg";
import styles from "../../styles/ListingCards.module.css";
import ListingsModal from "./ListingsModal";
import React from "react";
import randomcolor from "randomcolor";

export default function ListingsCard({ property }: any) {
  // State For Modal --------------------->
  const [size, setSize] = useState<string | null>(null);
  // State For Modal --------------------->

  const color = randomcolor();

  // ?Function To Trigger Modal ---------------------------->
  const handleOpen = (
    value: string | null,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e !== undefined && e.preventDefault();
    setSize(value);
  };
  // !Function To Trigger Modal ---------------------------->

  return (
    <>
      <ListingsModal size={size} property={property} handleOpen={handleOpen} />
      <Link href={"/property/" + property._id}>
        <Card className="mx-4">
          <img
            src={property.listing_media[0]}
            alt="Loading..."
            className="w-full h-full object-cover rounded-t-xl"
          />
          <CardBody className="text-center">
            <Typography
              variant="h6"
              className="my-2 text-start poppins text-red-500 font-bold"
            >
              {property.before_price_label && (
                <span>{property.before_price_label}/</span>
              )}
              Rs {property.price}
              {property.after_price_label && (
                <span>/{property.after_price_label}</span>
              )}
            </Typography>
            <Typography
              variant="h4"
              className="my-4 text-start poppins text-black font-semibold"
            >
              {property.title}
            </Typography>
            <Typography className="text-start poppins">
              {property.description.substring(0, 30)}{" "}
              {property.description.length > 30 && "..."}
            </Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center flex-col gap-6 xl:flex-row xl:gap-0 justify-between py-3"
          >
            <div className="flex justify-start items-center w-full gap-3">
              <div
                style={{ backgroundColor: color }}
                className="w-16 xl:w-20 h-16 flex items-center justify-center rounded-full"
              >
                <strong className="text-white text-sm">
                  {property.seller_id.name.slice(0, 1).toUpperCase()}
                </strong>
              </div>
              <div className="author-info text-start flex flex-col justify-between">
                <strong className="text-md text-black">
                  {property.seller_id.name}
                </strong>
                <span className="text-sm text-gray-500">Estate Agent</span>
              </div>
            </div>
            <div className="icons flex w-full justify-end gap-2">
              <i className="fa-solid w-full text-center md:w-fit fa-arrow-up-right-from-square text-white text-lg px-3 py-2 rounded-full bg-red-500"></i>
              <i
                onClick={(e) => handleOpen("lg", e)}
                className="fa-solid hidden md:block fa-eye cursor-pointer text-white text-lg px-3 py-2 rounded-full bg-red-500"
              ></i>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
}
