import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import StarRatings from "react-star-ratings";
import SpinnerLarge from "../../../components/common/SpinnerLarge";
import StarRatingsSM from "../../../components/common/StarRatingsSM";

import { fetchSellerProperties, fetchUserProfile } from "../../../functions";
import { fetchSellerReviews } from "../../../functions/review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * ?Fetch Seller Review By Calling fetchSellerReviews function which is calling An API To Fetch Seller Reviews
   */
  const getSellerReviews = async () => {
    const data = await fetchSellerReviews();
    setReviews(data);
    setIsLoading(false);
  };
  /**
   * ?Fetch Seller Profile By Calling fetchUserProfile function which is calling An API To Fetch Seller Profile
   */
  const getSellerProfile = async () => {
    const data = await fetchUserProfile();
    setAverageRating(data.rating);
  };

  useEffect(() => {
    setIsLoading(true);
    getSellerReviews();
    getSellerProfile();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-center h-screen flex items-center justify-center">
          <SpinnerLarge />
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <h1 className="text-3xl mx-5 poppins font-bold my-5">Reviews</h1>
            <span className="bg-red-500 transition-all duration-500 hover:bg-slate-800 cursor-pointer rounded-full py-2 text-sm text-white px-4">
              Average Rating: {averageRating}
            </span>
          </div>

          <div className="overflow-x-auto m-4 relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Property
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Date
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Comments
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Stars
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviews.length > 0 ? (
                  reviews.map((review: any) => {
                    return (
                      <tr key={review._id}>
                        <td className="py-4 px-6 text-start">
                          {review.property_id.title}
                        </td>
                        <td className="py-4 px-6 text-start">
                          <Moment format="MMMM D, YYYY">
                            {review.createdAt}
                          </Moment>
                        </td>
                        <td className="py-4 px-6 text-start">{review.msg}</td>
                        <td className="py-4 px-6 text-start">
                          <div className="flex items-center gap-2">
                            <StarRatings
                              rating={review.stars}
                              starRatedColor="red"
                              starDimension="18px"
                              starSpacing="1px"
                            />
                            <span className="text-red-500 font-semibold mt-1.5">
                              {review.stars}{" "}
                              {review.stars === 1 ? "Star" : "Stars"}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-start">{review.name}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td colSpan={12} className="py-3" align="center">
                      No Reviews Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Reviews;
