import React from "react";

const ButtonRed = ({
  text,
  handleClick,
  width,
}: {
  text: string;
  handleClick: any;
  width: string;
}) => {
  return (
    <button
      className={`${
        width === "full" ? "w-full" : "w-40"
      } bg-red-500 hover:bg-slate-800 transition-all tracking-wider rounded p-3 text-white`}
      style={{ padding: ".6rem" }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonRed;
