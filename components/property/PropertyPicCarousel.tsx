import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import img from "../../assets/img/logo-og.png";
import SliderArrows from "../common/SliderArrows";
const PropertyPicCarousel = () => {
  const slider = React.useRef<null>(null);
  const settings = {
    dots: false,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "364px",
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <>
      <div className="mb-24 slider relative">
        <Slider ref={slider} {...settings}>
          <div className="overflow-hidden">
            <Image
              alt="Loading..."
              className="mx-auto w-full h-96 object-cover cursor-pointer transition-all duration-500 hover:scale-150"
              src={img}
            />
          </div>
          <div className="overflow-hidden">
            <Image
              alt="Loading..."
              className="mx-auto w-full h-96 object-cover cursor-pointer transition-all duration-500 hover:scale-150"
              src={img}
            />
          </div>
          <div className="overflow-hidden">
            <Image
              alt="Loading..."
              className="mx-auto w-full h-96 object-cover cursor-pointer transition-all duration-500 hover:scale-150"
              src={img}
            />
          </div>
          <div className="overflow-hidden">
            <Image
              alt="Loading..."
              className="mx-auto w-full h-96 object-cover cursor-pointer transition-all duration-500 hover:scale-150"
              src={img}
            />
          </div>
        </Slider>
        <SliderArrows slider={slider} top="top-40" />
      </div>
    </>
  );
};

export default PropertyPicCarousel;
