import Image from "next/image";
import React from "react";
import img from "../../assets/img/author.jpg";
import styles from "../../styles/TestimonialCard.module.css";
interface PropTypes {
  review: string;
  name: string;
  index: number;
  cardActive: any;
  onCardEnter: any;
}

const TestimonialCard = ({
  review,
  index,
  cardActive,
  onCardEnter,
}: PropTypes) => {
  return (
    <div
      className="card rounded shadow-xl p-8 sm:py-10 sm:px-7 bg-white"
      onMouseEnter={() => onCardEnter(index)}
    >
      <div
        className={`card-item ${
          index === cardActive ? "active" : ""
        } flex flex-col items-start gap-8`}
      >
        <p className="review text-start text-slate-400">{review}</p>
        <div className="author-info">
          <div className="flex gap-3 items-center">
            <Image src={img} alt="Loading..." className={styles.authorPic} />
            <div className="author-info text-start flex flex-col justify-between">
              <strong className="text-md text-black">Muhammad Uzair</strong>
              <span className="text-sm text-gray-500">Estate Agents</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
