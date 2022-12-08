import React from "react";
import StarRatings from "react-star-ratings";

const StarRating = ({
  rating,
  reviews,
}: {
  rating: number;
  reviews: number;
}) => {
  return (
    <div className="ratings flex items-center justify-center">
      <StarRatings
        rating={rating}
        starRatedColor="red"
        starDimension="25px"
        starSpacing="1px"
      />
      <span className="ml-2 poppins text-red-500">({reviews} Reviews)</span>
    </div>
  );
};

export default StarRating;
