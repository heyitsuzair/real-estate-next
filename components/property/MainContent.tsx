import React from "react";
import BadgeFilled from "../common/BadgeFilled";
import CommentsCount from "../common/CommentsCount";
import Date from "../common/Date";

const MainContent = () => {
  return (
    <div className="container mx-auto px-20 pt-12 pb-32">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="meta flex gap-6 items-center">
            <BadgeFilled text="For Sale" />
            <Date date="May 19, 2022" />
            <CommentsCount totalComments={20} link="comments" />
          </div>
        </div>
        <div className="col-span-4">Hello</div>
      </div>
    </div>
  );
};

export default MainContent;
