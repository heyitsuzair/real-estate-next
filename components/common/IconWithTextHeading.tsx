import React from "react";

interface PropTypes {
  text: string;
  Icon: string;
  heading: string;
}

const IconWithTextHeading = ({ heading, text, Icon }: PropTypes) => {
  return (
    <div className="icon-with-text flex gap-4 items-center">
      <div className="bg-red-50 rounded-full" style={{ padding: ".8rem 1rem" }}>
        <i className={`${Icon} text-red-500`} aria-hidden="true"></i>
      </div>
      <div>
        <h3 className="text-sm">{heading}</h3>
        <span className="text-gray-500 text-sm">{text}</span>
      </div>
    </div>
  );
};

export default IconWithTextHeading;
