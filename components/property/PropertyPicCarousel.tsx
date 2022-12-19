import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import img from "../../assets/img/logo-og.png";
import ReactImageLightbox from "../common/ReactImageLightbox";
import SliderArrows from "../common/SliderArrows";
const PropertyPicCarousel = ({
  property_pics,
}: {
  property_pics: string[];
}) => {
  const slider = React.useRef<null>(null);

  // State For React Image Lightbox ---------------------->
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // State For React Image Lightbox ---------------------->

  // ?Open Lightbox When Someone Clicks On Image ------------->
  const handleImageClick = () => {
    setIsOpen(true);
  };
  // !Open Lightbox When Someone Clicks On Image ------------->

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
        breakpoint: 1024,
        settings: {
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <>
      <ReactImageLightbox
        setIsOpen={setIsOpen}
        imagesArray={property_pics}
        isOpen={isOpen}
      />
      <div className="mb-24 slider relative">
        <Slider ref={slider} {...settings}>
          {property_pics.map((picture: any, index: number) => {
            return (
              <div className="overflow-hidden" key={index}>
                <img
                  alt="Loading..."
                  className="mx-auto w-full h-96 object-cover cursor-pointer transition-all duration-500 hover:scale-125"
                  src={picture}
                  onClick={(e) => handleImageClick()}
                />
              </div>
            );
          })}
        </Slider>
        <SliderArrows slider={slider} top="top-40" />
      </div>
    </>
  );
};

export default PropertyPicCarousel;
