import React from "react";
import styles from "../../styles/Breadcrumb.module.css";
import TextSemiLarge from "./TextSemiLarge";
const BreadCrumb = ({ text }: { text: string }) => {
  return (
    <div className={`${styles.breadcrumbBg} flex items-center py-20`}>
      <div className="container mx-auto flex flex-col gap-8 w-4/5">
        <TextSemiLarge text={text} />
        <div className="crumb flex gap-2 mt-4">
          <i className="fa fa-home text-red-500" aria-hidden="true"></i>
          <div className="text-sm leading-0 flex gap-3 items-center mt-px">
            <span className="text-gray-500">Home</span>{" "}
            <i className="fa fa-chevron-right fa-2xs" aria-hidden="true"></i>{" "}
            <span className="text-red-500 font-semibold">{text}</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
