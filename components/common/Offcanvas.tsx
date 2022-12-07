import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../../assets/img/logo.png";
import { NavbarMenu } from "../../menus";

interface PropTypes {
  canvasHidden: boolean;
  setCanvasHidden: any;
}

const Offcanvas = ({ canvasHidden, setCanvasHidden }: PropTypes) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white  bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96 ${
          canvasHidden ? `translate-x-full` : `translate-x-0`
        }`}
        tabIndex={-1}
        style={{ zIndex: 12 }}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header flex items-center justify-between p-4">
          <h5
            className="offcanvas-title mb-0 leading-normal font-semibold"
            id="offcanvasRightLabel"
          >
            <Image alt="Loading..." src={Logo} />
          </h5>

          <i
            className="fa-solid fa-xmark text-2xl"
            onClick={() => setCanvasHidden(!canvasHidden)}
          ></i>
        </div>
        <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
          <div className="nav-items flex flex-col gap-7">
            {NavbarMenu.map((menu) => {
              return (
                <Link
                  className={`text-2xl text-black border-b-4 py-3.5 ${
                    router.pathname === menu.path
                      ? "border-red-500"
                      : "border-gray"
                  }`}
                  key={menu.name}
                  href={menu.path}
                  onClick={() => setCanvasHidden(!canvasHidden)}
                >
                  {menu.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
