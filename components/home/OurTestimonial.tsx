import React, { useState } from "react";
import { OurTestimonialCards } from "../../cards";
import Badge from "../common/Badge";
import TestimonialCard from "../common/TestimonialCard";
import TextLarge from "../common/TextLarge";

const OurTestimonial = () => {
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
    <div className="text-center mt-24 bg-slate-200 pt-20 pb-40 our-testimonials">
      <div className="badge my-8">
        <Badge text="Our Testimonial" />
      </div>
      <div className="heading my-6">
        <TextLarge text="Clients Feedback" />
      </div>
      <div className="my-4 px-20 justify-center gap-6 pb-12 mt-12 cards grid grid-cols-12 container mx-auto">
        {OurTestimonialCards.map((card, index) => {
          return (
            <div
              className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-4"
              key={index}
            >
              <TestimonialCard
                index={index}
                review={card.review}
                name={card.name}
                cardActive={cardActive}
                onCardEnter={onCardEnter}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTestimonial;
