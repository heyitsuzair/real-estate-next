import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchProperties } from "../../../functions";
import ListingsCard from "../../common/ListingsCard";

const HomeCarousel = () => {
  const [properties, setProperties] = useState([]);

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
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
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

  /**
   * Fetch Properties Of First Page Pagination
   */
  const getProperties = async () => {
    const properties = await fetchProperties("1");
    setProperties(properties.docs);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div>
      <div className="mt-16">
        <Slider {...settings}>
          {properties.map((property: any) => {
            return (
              <div key={property._id}>
                <ListingsCard property={property} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeCarousel;
