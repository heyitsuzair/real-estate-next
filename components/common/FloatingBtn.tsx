import React from "react";

const FloatingBtn = ({
  icon,
  handleClick,
}: {
  icon: string;
  handleClick: () => void;
}) => {
  return (
    <div
      className="cursor-pointer z-10 shadow-xl bg-slate-800 flex items-center rounded-full justify-center w-12 h-12 fixed bottom-4 right-4"
      onClick={() => handleClick()}
    >
      <i className={`${icon} text-white`} aria-hidden="true"></i>
    </div>
  );
};

export default FloatingBtn;
