import Image from "next/image";
import React from "react";
import Logo from "../../assets/img/logo-og.png";
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});
import randomcolor from "randomcolor";
import Moment from "react-moment";

interface PropTypes {
  comment: {
    _id: string;
    stars: number;
    msg: string;
    name: string;
    website: string;
    property_id: string;
    createdAt: string;
    updatedAt: string;
  };
}

const Comment = ({ comment }: PropTypes) => {
  const color = randomcolor();

  /**
   * Capitalize First Letter
   */
  const avatarLetter = comment.name.charAt(0).toUpperCase();

  return (
    <div className="reviews border-b-2 py-4 grid grid-cols-12 items-center gap-6">
      <div className="author-pic col-span-12 md:col-span-2">
        <div
          style={{ backgroundColor: color }}
          className="w-28 h-28  flex items-center justify-center mx-auto rounded-full"
        >
          <strong className="text-white text-4xl">{avatarLetter}</strong>
        </div>
      </div>
      <div className="details col-span-12 md:col-span-10">
        <div className="author-info flex flex-col gap-4 md:flex-row items-center justify-between">
          <div className="name-stars text-center md:text-start">
            <h1 className="text-lg font-semibold">{comment.name}</h1>
            <div className="flex items-center gap-2">
              <StarRatings
                rating={comment.stars}
                starRatedColor="red"
                starDimension="18px"
                starSpacing="1px"
              />
              <span className="text-red-500 font-semibold mt-1.5">
                {comment.stars} {comment.stars === 1 ? "Star" : "Stars"}
              </span>
            </div>
          </div>
          <div className="date-span text-gray-600 border-gray-300 border-2 hover:border-red-500 py-1 px-3 md:px-5 rounded-full text-sm">
            <Moment format="MMMM D, YYYY">{comment.createdAt}</Moment>
          </div>
        </div>
        <div className="review text-gray-600 text-sm my-5 text-center md:text-start">
          {comment.msg}
        </div>
      </div>
    </div>
  );
};

export default Comment;
