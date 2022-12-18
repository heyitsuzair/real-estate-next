import React from "react";
import Moment from "react-moment";

const Date = ({ date }: { date: string }) => {
  return (
    <div className="date text-sm">
      <i
        className="fa-solid fa-calendar-days text-red-500"
        aria-hidden="true"
      ></i>
      &nbsp;{" "}
      <span className="text-gray-600">
        <Moment fromNow>{date}</Moment>
      </span>
    </div>
  );
};

export default Date;
