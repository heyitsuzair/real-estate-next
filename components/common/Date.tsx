import React from "react";

const Date = ({ date }: { date: string }) => {
  return (
    <div className="date text-sm">
      <i
        className="fa-solid fa-calendar-days text-red-500"
        aria-hidden="true"
      ></i>
      &nbsp; <span className="text-gray-600">{date}</span>
    </div>
  );
};

export default Date;
