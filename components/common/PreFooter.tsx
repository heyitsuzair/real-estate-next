import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ButtonRedWithIcon from "./ButtonRedWithIcon";
import TextSemiLarge from "./TextSemiLarge";

const PreFooter = () => {
  const router = useRouter();

  const onExploreProperitesClick = () => {
    router.push("/shop");
  };

  return (
    <div className="bg-slate-800">
      <div className="bg-red-500 rounded w-4/5 relative bottom-24 mx-auto p-12">
        <footer
          id="pre_footer"
          className="flex flex-col gap-8 md:gap0 md:flex-row justify-between items-center"
        >
          <div className="pre-footer-left flex flex-col gap-8">
            <h1 className="text-3xl text-white font-bold">
              Looking For A Dream House?
            </h1>
            <p className="text-white">
              We can help you realize your dream of a new home
            </p>
          </div>
          <div className="pre-footer-right">
            <button
              className="bg-white hover:bg-slate-800 hover:text-white transition-all tracking-wider rounded p-3 text-black"
              style={{ padding: ".6rem" }}
              onClick={() => onExploreProperitesClick()}
            >
              Explore Properties &nbsp;
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PreFooter;
