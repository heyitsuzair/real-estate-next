import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import img from "../../assets/img/logo-og.png";
import img2 from "../../assets/img/21.png";
import img3 from "../../assets/img/author.jpg";
import NextArrow from "../carousels/NextArrow";
const PropertyPicCarousel = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "314px",
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
  };

  return (
    <>
      <div className="mb-24 slider relative">
        <Slider ref={slider} {...settings}>
          <div>
            <Image
              alt="Loading..."
              className="mx-auto w-full h-96 object-contain"
              src={img2}
            />
          </div>
          <div>
            <Image
              alt="Loading..."
              className="mx-auto w-full h-96 object-contain"
              src={img}
            />
          </div>
          <div>
            <Image
              alt="Loading..."
              className="mx-auto w-full h-96 object-contain"
              src={img}
            />
          </div>
          <div>
            <Image
              alt="Loading..."
              className="mx-auto w-full h-96 object-contain"
              src={img3}
            />
          </div>
        </Slider>
        <div className="flex justify-between absolute w-full mx-auto px-8 top-40">
          <button
            onClick={() => slider.current?.slickPrev()}
            className="bg-red-500 text-white rounded-full py-4 px-5 hover:bg-white hover:text-red-500 transition-all"
          >
            <i className="fa text-2xl fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button
            onClick={() => slider.current?.slickNext()}
            className="bg-red-500 text-white rounded-full py-4 px-5 hover:bg-white hover:text-red-500 transition-all"
          >
            <i className="fa text-2xl fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertyPicCarousel;
