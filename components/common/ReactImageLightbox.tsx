import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

interface PropTypes {
  isOpen: boolean;
  setIsOpen: any;
  imagesArray: string[];
}

const ReactImageLightbox = ({ isOpen, setIsOpen, imagesArray }: PropTypes) => {
  const images = [
    "//placekitten.com/1500/500",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
    "//placekitten.com/1500/1500",
  ];
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default ReactImageLightbox;
