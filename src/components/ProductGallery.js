import React, { useState } from "react";

const ProductGallery = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images);
  console.log(images);
  console.log(main);

  return (
    <>
      <img src={main.url} alt="main" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          console.log(index);
          return (
            <img
              src={image.url}
              alt="detail"
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductGallery;
