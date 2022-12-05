import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/img/logo.png";
import Offcanvas from "./Offcanvas";
import { useState } from "react";
import NavMenu from "../subcomponents/navbar/NavMenu";
import NavIcons from "../subcomponents/navbar/NavIcons";

const Navbar = () => {
  const [canvasHidden, setCanvasHidden] = useState<boolean>(true);

  return (
    <div className="grid grid-cols-12 items-center my-8">
      <div className="col-span-12 md:col-span-4 lg:col-span-4 sm:col-span-6 text-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Loading..."
            className="mx-auto"
            priority={true}
          />
        </Link>
      </div>
      <div className="hidden md:col-span-4 lg:col-span-4 md:block lg:block text-center">
        <NavMenu />
      </div>
      <div className="col-span-12 mt-8 md:mt-0 sm:mt-0 lg:mt-0 md:col-span-4 lg:col-span-4 sm:col-span-6 text-center flex justify-center gap-4">
        <NavIcons
          canvasHidden={canvasHidden}
          setCanvasHidden={setCanvasHidden}
        />
      </div>
      <Offcanvas
        canvasHidden={canvasHidden}
        setCanvasHidden={setCanvasHidden}
      />
    </div>
  );
};

export default Navbar;
