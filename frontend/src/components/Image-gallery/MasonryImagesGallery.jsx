import React from "react";
import Masonary, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryImages from "./GalleryImages";
const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonary gutter="1rem">
        {GalleryImages.map((item, index) => (
          <img
          className="masonry__img"
            src={item}
            key={index}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonary>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
