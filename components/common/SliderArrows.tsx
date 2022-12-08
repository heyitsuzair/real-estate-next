import React from "react";

interface PropTypes {
  slider: any;
  top: string;
}

const SliderArrows = ({ slider, top }: PropTypes) => {
  return (
    <>
      <button
        onClick={() => slider.current?.slickPrev()}
        className={`bg-red-500 text-white rounded-full py-4 px-5 hover:bg-white hover:text-red-500 transition-all absolute left-0 mx-4 ${top}`}
      >
        <i className="fa text-2xl fa-arrow-left" aria-hidden="true"></i>
      </button>
      <button
        onClick={() => slider.current?.slickNext()}
        className={`bg-red-500 text-white rounded-full py-4 px-5 hover:bg-white hover:text-red-500 transition-all ${top} absolute right-0 mx-4`}
      >
        <i className="fa text-2xl fa-arrow-right" aria-hidden="true"></i>
      </button>
    </>
  );
};

export default SliderArrows;
