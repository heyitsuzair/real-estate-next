import Link from "next/link";
import React, { useRef } from "react";
import IconCircle from "./IconCircle";
import TextMedium from "./TextMedium";

interface Proptypes {
  headerIcon: string;
  text: string;
  link: string;
  footerIcon: string;
}

const IconBottomCard = ({ headerIcon, text, link, footerIcon }: Proptypes) => {
  const ref = useRef<null | HTMLSpanElement>(null);

  // ?Handle When Someone Enter Mouse Over Card --------------------------->
  const handleMouseEnter = () => {
    ref.current?.classList.add("text-red-500");
  };
  // !Handle When Someone Enter Mouse Over Card --------------------------->

  // ?Handle When Someone Leave Mouse From Card --------------------------->
  const handleMouseLeave = () => {
    ref.current?.classList.remove("text-red-500");
  };
  // !Handle When Someone Leave Mouse From Card --------------------------->

  return (
    <Link href={link}>
      <div
        className="shadow-xl relative flex flex-col gap-8 hover:text-white items-center transition-all hover:bg-red-500 cursor-pointer justify-center rounded-md py-16"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <IconCircle icon={headerIcon} />
        <TextMedium text={text} />
        <div className="icon absolute hidden sm:block top-0 -right-4 -rotate-45">
          <span
            className="bg-white transition-all rounded-full px-4 py-3"
            ref={ref}
          >
            <i className={footerIcon}></i>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default IconBottomCard;
