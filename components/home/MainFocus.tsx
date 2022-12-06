import React, { useState } from "react";
import Badge from "../common/Badge";
import Card from "../common/Card";
import { MainFocusCards } from "../../cards";

const MainFocus = () => {
  // Card State ----------------->
  const [cardActive, setCardActive] = useState<number>();
  // Card State ----------------->

  /**
   * ?Execute Code When Visitor's Mouse Enter The Card
   *
   * @param index The Card Index To Make It Active
   * */

  const onCardEnter = (index: number) => setCardActive(index);

  // !Execute Code When Visitor's Mouse Enter The Card ------------->

  return (
    <div className="text-center mt-24 bg-white main-focus">
      <div className="badge my-8">
        <Badge text="Our Services" />
      </div>
      <div className="heading my-6">
        <h1 className="text-large font-semibold">Our Main Focus</h1>
      </div>
      <div className="my-4 px-20 justify-center gap-6 pb-12 mt-12 cards grid grid-cols-12 container mx-auto">
        {MainFocusCards.map((card, index) => {
          return (
            <div
              className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-4"
              key={card.heading}
            >
              <Card
                index={index}
                cardActive={cardActive}
                onCardEnter={onCardEnter}
                text={card.text}
                linkText={card.linkText}
                link={card.link}
                heading={card.heading}
                icon={card.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainFocus;
