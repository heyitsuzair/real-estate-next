import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";

import styles from "../../../styles/Navbar.module.css";

const UserPopover = () => {
  const [popover, setPopover] = useState<
    boolean | MouseEventHandler<HTMLAnchorElement>
  >(false);
  return (
    <ul>
      <li className="relative">
        <div
          className="shadow-2xl transition-all ease-in-out hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 rounded-full"
          style={{ padding: ".75rem 1.1rem" }}
          onClick={() => setPopover(!popover)}
        >
          <span className={`absolute ${styles.cartCountSpan}`}>2</span>
          <i className="fa-regular fa-user"></i>
        </div>
        <div
          className={`absolute ${
            popover
              ? "opacity-100 -right-16 top-16 sm:top-14 sm:-right-0 visible"
              : "opacity-0 -right-16 top-24 sm:-right-0 invisible"
          } transition-all duration-300 bg-white rounded-lg ease-in-out px-6 shadow-2xl py-3 right-0`}
        >
          <Link
            href={"/login"}
            onClick={() => setPopover(!popover)}
            className="text-black hover:text-red-500 transition-all duration-300 border-b-2 hover:border-red-500 pb-2 px-10 block my-6 font-semibold"
          >
            Login
          </Link>
          <Link
            href={"/register"}
            onClick={() => setPopover(!popover)}
            className="text-black hover:text-red-500 transition-all duration-300 border-b-2 hover:border-red-500 pb-2 px-10 block my-6 font-semibold"
          >
            Register
          </Link>
          <Link
            href={"/dashboard?route=myProperties"}
            onClick={() => setPopover(!popover)}
            className="text-black hover:text-red-500 transition-all duration-300 border-b-2 hover:border-red-500 pb-2 px-10 block my-6 font-semibold"
          >
            Dashboard
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default UserPopover;
