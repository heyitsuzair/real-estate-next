import Image from "next/image";
import React from "react";
import Plan from "../../../assets/img/10.png";
import Plan2 from "../../../assets/img/logo-og.png";
import TextSemiLarge from "../../common/TextSemiLarge";

const TabItem = () => {
  return (
    <div className="floor-tab-item">
      <div className="grid grid-cols-12 items-center justify-center gap-8">
        <div className="col-span-12 lg:col-span-6">
          <Image
            alt="Loading..."
            className="rounded-md object-cover h-[40vh] sm:h-[50vh] md:h-[60vh] lg:[h-70vh]"
            src={Plan}
          />
        </div>
        <div className="floor-info text-center px-14 pb-14 lg:text-start col-span-12  lg:col-span-6 text-black poppins">
          <div className="floor-no my-7">
            <TextSemiLarge text="First Floor" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga
            cupiditate dignissimos, consequatur optio fugiat architecto ut harum
            cum aliquid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabItem;
