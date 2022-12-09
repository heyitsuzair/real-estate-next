import Image from "next/image";
import React from "react";
import Logo from "../../assets/img/logo-og.png";
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});
const Comment = () => {
  return (
    <div className="reviews border-b-2 py-4 grid grid-cols-12 items-center gap-6">
      <div className="author-pic col-span-12 md:col-span-2">
        <Image
          src={Logo}
          alt="Loading..."
          className="w-28 h-28 object-cover rounded-full mx-auto"
        />
      </div>
      <div className="details col-span-12 md:col-span-10">
        <div className="author-info flex items-center justify-between">
          <div className="name-stars">
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
        <div className="review text-gray-600 text-sm my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem
          facilis corporis esse, similique atque.
        </div>
      </div>
    </div>
  );
};

export default Comment;
