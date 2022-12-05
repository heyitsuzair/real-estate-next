import Image from "next/image";
import React from "react";
import House from "../../assets/img/7.png";
import Badge from "../common/Badge";
import IconWithText from "../common/IconWithText";
import styles from "../../styles/AboutSection.module.css";

const About = () => {
  return (
    <div
      className={`container mx-auto px-16 mt-0 p-5 sm:mt-48 lg:mt-28 ${styles.about} `}
    >
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-12 mb-10 md:mb-10 lg:mb-0 md:col-span-12 lg:col-span-6 sm:col-span-12">
          <Image
            className="mx-auto"
            src={House}
            alt="Loading..."
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-6 sm:col-span-12">
          <Badge text="About Us" />
          <h1 className="text-large my-6 font-bold">
            The Leading Real Estate Rental Marketplace
            <span className="text-red-500">.</span>
          </h1>
          <span className="text-gray-500 mb-3">
            Over 39,000 people work for us in more than 70 countries all over
            the This breadth of global coverage, combined with specialist
            services
          </span>
          <div className="icons grid grid-cols-12 mt-10">
            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
              <IconWithText Icon="fa fa-home" text="Smart Home Design" />
            </div>
            <div className="col-span-12 mt-6 sm:mt-0 sm:col-span-6 md:col-span-6 lg:col-span-6">
              <IconWithText
                Icon="fa-regular fa-image"
                text="Beautiful Scene Around"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 mt-6">
              <IconWithText
                Icon="fa fa-dumbbell"
                text="Exceptional Lifestyle"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 mt-6">
              <IconWithText
                Icon="fa-solid fa-shield-halved"
                text="Complete 24/7 Security"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
