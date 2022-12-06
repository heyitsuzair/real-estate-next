import React, { useState } from "react";
import Badge from "../common/Badge";
import Card from "../common/Card";

const MainFocus = () => {
  const [cardActive, setCardActive] = useState<number>();

  return (
    <div className="text-center mt-24 bg-white main-focus">
      <div className="badge my-8">
        <Badge text="Our Services" />
      </div>
      <div className="heading my-6">
        <h1 className="text-large font-semibold">Our Main Focus</h1>
      </div>
      <div className="my-4 px-20 pb-12 mt-12 cards grid grid-cols-12 container mx-auto">
        <div className="col-span-4">
          <Card
            text="Over 1 million+ homes for sale available on the website, we can match
          you with a house you will want to call home."
            linkText="Find A Home"
            link="/"
            heading="Rent A Home"
            icon="fa-solid fa-house"
          />
        </div>
      </div>
    </div>
  );
};

export default MainFocus;
