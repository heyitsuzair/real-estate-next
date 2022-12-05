import React from "react";

interface PropTypes {
  text: string;
  bgColorClass: string;
  borderColorClass: string;
}

const Quote = ({ text, bgColorClass, borderColorClass }: PropTypes) => {
  return (
    <div
      className={`quote text-gray-500 pl-10 ${bgColorClass} py-5 leading-7 lg:pr-32 pr-12 border-l-4 ${borderColorClass}`}
    >
      {`"${text}"`}
    </div>
  );
};

export default Quote;
