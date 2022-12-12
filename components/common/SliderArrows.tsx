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
        className={`bg-red-500 text-white rounded-full hover:bg-white hover:text-red-500 transition-all absolute left-0 mx-4 ${top}`}
        style={{ padding: ".9rem 1.25rem" }}
      >
        <i className="fa text-2xl fa-arrow-left" aria-hidden="true"></i>
      </button>
      <button
        onClick={() => slider.current?.slickNext()}
        className={`bg-red-500 text-white rounded-full hover:bg-white hover:text-red-500 transition-all ${top} absolute right-0 mx-4`}
        style={{ padding: ".9rem 1.25rem" }}
      >
        <i className="fa text-2xl fa-arrow-right" aria-hidden="true"></i>
      </button>
    </>
  );
};

export default SliderArrows;
