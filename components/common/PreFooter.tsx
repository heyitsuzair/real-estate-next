import { useRouter } from "next/router";
import React from "react";

const PreFooter = () => {
  const router = useRouter();

  //? Handle When Someone Clicks On Explore Properties ----------------->
  const onExploreProperitesClick = () => {
    router.push("/shop");
  };
  //! Handle When Someone Clicks On Explore Properties ----------------->

  return (
    <div className="bg-slate-800">
      <div className="bg-red-500 rounded w-4/5 relative bottom-24 mx-auto p-8 md:p-12">
        <footer
          id="pre_footer"
          className="flex flex-col gap-8 lg:gap0 lg:flex-row justify-between items-center"
        >
          <div className="pre-footer-left flex flex-col gap-8">
            <h1 className="text-2xl md:text-4xl text-white text-center lg:text-start font-bold">
              Looking For A Dream House?
            </h1>
            <p className="text-white text-center lg:text-start">
              We can help you realize your dream of a new home
            </p>
          </div>
          <div className="pre-footer-right">
            <button
              className="bg-white hover:bg-slate-800 hover:text-white transition-all tracking-wider rounded text-black flex items-center"
              style={{ padding: ".6rem 1.5rem" }}
              onClick={() => onExploreProperitesClick()}
            >
              <span>Explore Properties &nbsp;</span>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PreFooter;
