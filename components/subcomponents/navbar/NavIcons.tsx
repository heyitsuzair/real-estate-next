import React from "react";

import styles from "../../../styles/Navbar.module.css";

interface PropTypes {
  canvasHidden: boolean;
  setCanvasHidden: any;
}

const NavIcons = ({ setCanvasHidden, canvasHidden }: PropTypes) => {
  return (
    <>
      <div className="shadow-2xl transition-all ease-in-out hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 py-3 px-4 rounded-full">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="shadow-2xl transition-all ease-in-out hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 py-3 px-4 rounded-full">
        <i className="fa-regular fa-user"></i>
      </div>
      <div className="shadow-2xl transition-all ease-in-out hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 py-3 px-4 rounded-full relative">
        <span className={`absolute ${styles.cartCountSpan}`}>2</span>
        <i className="fa fa-cart-shopping"></i>
      </div>
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
