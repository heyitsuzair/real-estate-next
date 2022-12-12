import React from "react";
import UserPopover from "./UserPopover";

interface PropTypes {
  canvasHidden: boolean;
  setCanvasHidden: any;
  setIsSearchVisible: any;
  isSearchVisible: boolean;
}

const NavIcons = ({
  setCanvasHidden,
  canvasHidden,
  setIsSearchVisible,
  isSearchVisible,
}: PropTypes) => {
  return (
    <>
      <div
        className="shadow-2xl transition-all ease-in-out hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 py-3 px-4 rounded-full"
        onClick={() => setIsSearchVisible(!isSearchVisible)}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <UserPopover />
      <a
        className="shadow-2xl md:hidden lg:hidden hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 py-3 px-4 rounded-full"
        onClick={() => setCanvasHidden(!canvasHidden)}
      >
        <i className="fa-sharp fa-solid fa-bars"></i>
      </a>
    </>
  );
};

export default NavIcons;
