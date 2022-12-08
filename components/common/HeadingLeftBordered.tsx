import React from "react";

const HeadingLeftBordered = ({ heading }: { heading: string }) => {
  return (
    <div className="heading-left-bordered">
      <h1 className="text-xl border-l-2 font-semibold border-red-500 pl-3.5">
        {heading}
      </h1>
    </div>
  );
};

export default HeadingLeftBordered;
