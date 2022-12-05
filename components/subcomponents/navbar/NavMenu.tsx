import React from "react";
import { NavbarMenu } from "../../../menus";
import Link from "next/link";

interface Menu {
  name: string;
  path: string;
}

const NavMenu = () => {
  return (
    <>
      {NavbarMenu.map((menu: Menu) => {
        return (
          <Link
            key={menu.name}
            href={menu.path}
            className="mx-8 hover:text-red-500 font-semibold"
          >
            {menu.name}
          </Link>
        );
      })}
    </>
  );
};

export default NavMenu;
