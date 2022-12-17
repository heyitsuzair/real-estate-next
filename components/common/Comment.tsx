import Image from "next/image";
import React from "react";
import Logo from "../../assets/img/logo-og.png";
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});
import randomcolor from "randomcolor";

const Comment = () => {
  const color = randomcolor();
  return (
    <div className="reviews border-b-2 py-4 grid grid-cols-12 items-center gap-6">
      <div className="author-pic col-span-12 md:col-span-2">
        <div
          style={{ backgroundColor: color }}
          className="w-28 h-28  flex items-center justify-center mx-auto rounded-full"
        >
          <strong className="text-white text-2xl">U</strong>
        </div>
      </div>
      <div className="details col-span-12 md:col-span-10">
        <div className="author-info flex flex-col gap-4 md:flex-row items-center justify-between">
          <div className="name-stars text-center md:text-start">
            <h1 className="text-lg font-semibold">Muhammad Uzair</h1>
            <StarRatings
              rating={4}
              starRatedColor="red"
              starDimension="18px"
              starSpacing="1px"
            />
          </div>
          <div className="date-span text-gray-600 border-gray-300 border-2 hover:border-red-500 py-1 px-3 md:px-5 rounded-full text-sm">
            <span>September 3, 2020</span>
          </div>
        </div>
        <div className="review text-gray-600 text-sm my-5 text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem
          facilis corporis esse, similique atque.
        </div>
      </div>
    </div>
  );
};

export default Comment;
