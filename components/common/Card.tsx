import Link from "next/link";
import React from "react";
import IconCircle from "./IconCircle";
import TextSemiLarge from "./TextSemiLarge";

interface PropTypes {
  icon: string;
  text: string;
  link: string;
  linkText: string;
  heading: string;
  index: number;
  cardActive: any;
  onCardEnter: any;
}

const Card = ({
  icon,
  text,
  link,
  linkText,
  heading,
  index,
  cardActive,
  onCardEnter,
}: PropTypes) => {
  return (
    <div
      className="card shadow-xl p-8 sm:p-12 bg-white"
      onMouseEnter={() => onCardEnter(index)}
    >
      <div
        className={`card-item ${
          index === cardActive ? "active" : ""
        } flex flex-col items-center gap-8`}
      >
        <IconCircle icon={icon} />
        <div className="heading">
          <TextSemiLarge text={heading} />
        </div>
        <span className="text-slate-400 text-sm">{text}</span>
        <Link
          className="card-link bg-red-500 text-white rounded-full py-3 px-6"
          href={link}
        >
          {linkText} &nbsp;
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Card;
