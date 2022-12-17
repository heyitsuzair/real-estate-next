import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <>
      <div className="grid items-center grid-cols-12 bg-slate-800  md:px-6 lg:px-12 sm:px-12">
        <div className="mx-6 topbar-left-col col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12 text-white">
          <div className="flex flex-col sm:flex-row items-center gap-2 justify-center sm:justify-center sm:my-5 md:my-0 lg:my-0 lg:justify-start">
            <div className="item-1 flex gap-1 items-center">
              <i className="fa-regular fa-envelope text-red-500"></i>
              <span className="text-sm">
                <a href="mailto:uzairdeveloper354123@gmail.com">
                  uzairdeveloper354123@gmail.com
                </a>
              </span>
            </div>
            <div className="item-2 flex gap-1 items-center">
              <i className="fa-solid fa-location-dot text-red-500"></i>
              <span className="text-sm">Lahore,Pakistan</span>
            </div>
          </div>
        </div>
        <div className="mx-6 topbar-left-col col-span-12 mt-6 sm:mt-0 md:mt-0 lg:mt-0 lg:col-span-6 md:col-span-6 sm:col-span-12 text-end text-white">
          <span className="flex justify-end items-center gap-3 justify-center md:justify-end lg:justify-end sm:justify-center">
            <a href="//facebook.com">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="//twitter.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="//instagram.com/codewith_uzair">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="//github.com/heyitsuzair">
              <i className="fa-brands fa-github"></i>
            </a>
            <Link
              href="/dashboard?route=addProperties"
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
