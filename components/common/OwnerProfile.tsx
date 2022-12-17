import React from "react";
import Author from "../../assets/img/author.jpg";
import Image from "next/image";
import StarRating from "../common/StarRatings";
import ButtonRedWithIcon from "./ButtonRedWithIcon";
import randomcolor from "randomcolor";

interface PropTypes {
  ownerName: string;
  ownerHobby: string;
  isSticky: boolean;
}

const OwnerProfile = ({ ownerName, ownerHobby, isSticky }: PropTypes) => {
  const color = randomcolor();

  return (
    <div
      className={`profile px-6 border-2 ${
        isSticky && "sticky top-32"
      } rounded text-center py-10`}
    >
      <div
        style={{ backgroundColor: color }}
        className="w-28 h-28  flex items-center justify-center mx-auto rounded-full"
      >
        <strong className="text-white text-2xl">I</strong>
      </div>
      <h1 className="text-2xl font-semibold mt-4">{ownerName}</h1>
      <p className="text-slate-400 text-md">{ownerHobby}</p>
      <div className="my-4">
        <StarRating justify="justify-center" reviews={3} rating={5} />
      </div>
      <ButtonRedWithIcon
        text="Call Seller"
        icon="fa fa-phone"
        iconPosition="left"
        width="full"
        handleClick={() => window.open("tel:03233337187", "_self")}
      />
    </div>
  );
};

export default OwnerProfile;
