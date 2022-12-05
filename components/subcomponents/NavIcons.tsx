import React from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import styles from "../../styles/Navbar.module.css";

interface PropTypes {
  canvasHidden: boolean;
  setCanvasHidden: any;
}

const NavIcons = ({ setCanvasHidden, canvasHidden }: PropTypes) => {
  return (
    <>
      <div className="shadow-2xl transition-all ease-in-out hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 p-3 rounded-full">
        <AiOutlineSearch strokeWidth={15} size={25} />
      </div>
      <div className="shadow-2xl transition-all ease-in-out hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 p-3 rounded-full">
        <AiOutlineUser strokeWidth={15} size={25} />
      </div>
      <div className="shadow-2xl transition-all ease-in-out hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 p-3 rounded-full relative">
        <span className={`absolute ${styles.cartCountSpan}`}>2</span>
        <AiOutlineShoppingCart strokeWidth={15} size={25} />
      </div>
      <a
        className="shadow-2xl md:hidden lg:hidden hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 p-3 rounded-full"
        href="#offcanvasRight"
        role="button"
        aria-controls="offcanvasRight"
        onClick={() => setCanvasHidden(!canvasHidden)}
      >
        <AiOutlineMenu strokeWidth={15} size={25} />
      </a>
    </>
  );
};

export default NavIcons;
