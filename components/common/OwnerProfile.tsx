import React from "react";
import Author from "../../assets/img/author.jpg";
import Image from "next/image";
import StarRating from "../common/StarRatings";

interface PropTypes {
  ownerName: string;
  ownerHobby: string;
  ownerBio: string;
  isSticky: boolean;
}

const OwnerProfile = ({
  ownerName,
  ownerHobby,
  ownerBio,
  isSticky,
}: PropTypes) => {
  return (
    <div
      className={`profile px-6 border-2 ${
        isSticky && "sticky top-32"
      } rounded text-center py-10`}
    >
      <Image
        src={Author}
        alt="Loading..."
        className="w-40 h-40 object-cover rounded-full mx-auto"
      />
      <h1 className="text-2xl font-semibold my-4">{ownerName}</h1>
      <p className="text-slate-400 text-sm">{ownerHobby}</p>
      <div className="my-4">
        <StarRating reviews={3} rating={5} />
      </div>
      <p className="text-slate-400 ">{ownerBio}</p>
    </div>
  );
};

export default OwnerProfile;
