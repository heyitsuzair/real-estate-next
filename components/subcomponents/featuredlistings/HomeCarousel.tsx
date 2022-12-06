import React from "react";
import Slider from "react-slick";
import ListingsCard from "../../common/ListingsCard";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    className: "center",
    centerPadding: "60px",
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="mt-16">
        <Slider {...settings}>
          <div>
            <ListingsCard />
          </div>
          <div>
            <ListingsCard />
          </div>
          <div>
            <ListingsCard />
          </div>
          <div>
            <ListingsCard />
          </div>
          <div>
            <ListingsCard />
          </div>
          <div>
            <ListingsCard />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeCarousel;
