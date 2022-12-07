import React from "react";
import { OurAminitesCard } from "../../cards";
import Badge from "../common/Badge";
import IconBottomCard from "../common/IconBottomCard";
import TextLarge from "../common/TextLarge";

const OurAminities = () => {
  return (
    <div className="text-center mt-24 bg-white our-aminities">
      <div className="badge my-8">
        <Badge text="Our Aminities" />
      </div>
      <div className="heading my-6">
        <TextLarge text="Building Aminities" />
      </div>
      <div className="my-7 container gap-8 mx-auto grid justify-center p-4 md:p-12 grid-cols-12">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mb-8">
          {OurAminitesCard.map((card) => {
            return (
              <IconBottomCard
                key={card.text}
                text={card.text}
                footerIcon={card.footerIcon}
                headerIcon={card.headerIcon}
                link={card.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurAminities;
