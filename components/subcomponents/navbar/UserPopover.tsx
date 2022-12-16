import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { logoutUser } from "../../../functions";
import styles from "../../../styles/Navbar.module.css";

const UserPopover = () => {
  // ?State For Popover ---------->
  const [popover, setPopover] = useState<
    boolean | MouseEventHandler<HTMLAnchorElement>
  >(false);
  // !State For Popover ---------->

  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);

  /**
   * Handle When Someone Clicks Logout (Only For Logged In User)
   */
  const handleLogout = () => {
    logoutUser();
    router.push("/");
    setUser(null);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setUser(localStorage.getItem("re-user"));
    }
    //eslint-disable-next-line
  }, [user]);

  return (
    <ul>
      <li className="relative">
        <div
          className="shadow-2xl transition-all ease-in-out hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800 rounded-full"
          style={{ padding: ".75rem 1.1rem" }}
          onClick={() => setPopover(!popover)}
        >
          <span className={`absolute ${styles.cartCountSpan}`}>
            {user ? 99 : 0}
          </span>
          <i className="fa-regular fa-user"></i>
        </div>
        <div
          className={`absolute ${
            popover
              ? "opacity-100 -right-16 top-16 sm:top-14 sm:-right-0 visible"
              : "opacity-0 -right-16 top-24 sm:-right-0 invisible"
          } transition-all duration-300 bg-white rounded-lg ease-in-out px-6 shadow-2xl py-3 right-0`}
        >
          {user ? (
            <>
              <Link
                href={"/dashboard?route=myProperties"}
                onClick={() => setPopover(!popover)}
                className="text-black hover:text-red-500 transition-all duration-300 border-b-2 hover:border-red-500 pb-2 block my-6 font-semibold w-[13vw]"
              >
                My Properties
              </Link>
              <Link
                href={"/dashboard?route=addProperties"}
                onClick={() => setPopover(!popover)}
                className="text-black hover:text-red-500 transition-all duration-300 border-b-2 hover:border-red-500 pb-2 block my-6 font-semibold w-[13vw]"
              >
                Add Property
              </Link>
              <Link
                href={"/dashboard?route=package"}
                onClick={() => setPopover(!popover)}
                className="text-black hover:text-red-500 transition-all duration-300 border-b-2 hover:border-red-500 pb-2 block my-6 font-semibold w-[13vw]"
              >
                Package
              </Link>
              <Link
                href={"/dashboard?route=settings"}
                onClick={() => setPopover(!popover)}
                className="text-black hover:text-red-500 transition-all duration-300 border-b-2 hover:border-red-500 pb-2 block my-6 font-semibold w-[13vw]"
              >
                Settings
              </Link>
              <div
                onClick={handleLogout}
                className="text-black hover:text-red-500 cursor-pointer transition-all duration-300 border-b-2 hover:border-red-500 pb-2 block my-6 font-semibold w-[13vw]"
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <Link
                href={"/login"}
                onClick={() => setPopover(!popover)}
                className="text-black hover:text-red-500 transition-all duration-300 border-b-2 hover:border-red-500 pb-2 block my-6 font-semibold w-[13vw]"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                onClick={() => setPopover(!popover)}
                className="text-black hover:text-red-500 transition-all duration-300 border-b-2 hover:border-red-500 pb-2 block my-6 font-semibold w-[13vw]"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </li>
    </ul>
  );
};

export default UserPopover;
