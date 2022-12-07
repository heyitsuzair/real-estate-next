import React from "react";

interface Proptypes {
  text: string;
  handleClick: any;
  width: string;
  iconPosition: "left" | "right";
  icon: string;
}

const ButtonRedWithIcon = ({
  text,
  handleClick,
  width,
  icon,
  iconPosition,
}: Proptypes) => {
  return (
    <button
      className={`${
        width === "full" ? "w-full" : "w-40"
      } bg-red-500 hover:bg-slate-800 transition-all tracking-wider rounded p-3 text-white`}
      style={{ padding: ".6rem" }}
      onClick={handleClick}
    >
      {iconPosition === "left" && (
        <>
          <i className={icon} aria-hidden="true"></i> &nbsp;
        </>
      )}
      {text}
      {iconPosition === "right" && (
        <>
          &nbsp; <i className={icon} aria-hidden="true"></i>
        </>
      )}
    </button>
  );
};

export default ButtonRedWithIcon;
