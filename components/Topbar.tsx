import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Topbar = () => {
  return (
    <>
      <div className="grid items-center grid-cols-12 bg-slate-800 lg:px-12 md:px-12 sm:px-12">
        <div className="mx-6 topbar-left-col col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12 text-white">
          <div className="flex items-center gap-2 justify-center md:justify-start lg:justify-start sm:justify-center sm:my-5 md:my-0 lg:my-0">
            <div className="item-1 flex gap-1 items-center">
              <AiOutlineMail
                className="text-red-500"
                size={20}
                strokeWidth={40}
              />{" "}
              <span className="text-sm">info@webmail.com</span>
            </div>
            <div className="item-2 flex gap-1 items-center">
              <MdLocationOn className="text-red-500" size={20} />{" "}
              <span className="text-sm">Lahore,Pakistan</span>
            </div>
          </div>
        </div>
        <div className="mx-6 topbar-left-col col-span-12 mt-6 sm:mt-0 md:mt-0 lg:mt-0 lg:col-span-6 md:col-span-6 sm:col-span-12 text-end text-white">
          <span className="flex justify-end items-center gap-3 justify-center md:justify-end lg:justify-end sm:justify-center">
            <a href="//facebook.com">
              <FaFacebookF />
            </a>
            <a href="//twitter.com">
              <FaTwitter />
            </a>
            <a href="//instagram.com/codewith_uzair">
              <FaInstagram />
            </a>
            <a href="//github.com/heyitsuzair">
              <FaGithub />
            </a>
            <Link
              href="/"
              className="bg-red-500 py-3 px-8 font-semibold text-sm"
            >
              Add Listing
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Topbar;
