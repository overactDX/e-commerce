"use client";
import React, { useState } from "react";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product?.thumbnail);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (newImage, newIndex) => {
    setSelectedImage(newImage);
    setCurrentIndex(newIndex);
  };
  const handlePrevious = () => {
    const newIndex =
      (currentIndex - 1 + product.images.length) % product.images.length;
    handleImageClick(product.images[newIndex], newIndex);
  };
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % product.images.length;
    handleImageClick(product.images[newIndex], newIndex);
  };

  return (
    <div className="sticky top-0 overflow-hidden border ">
      <div className="relative mb-6 lg:mb-5 lg:h-96 bg-white">
        <Image
          className="object-contain w-full lg:h-full"
          src={selectedImage}
          alt="Img"
          width={300}
          height={300}
        />
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="cursor-pointer">
          {product.images.length > 1 && (
            <ArrowBackIosNewIcon
              onClick={handlePrevious}
              disabled={
                product.images.length <= 1 ||
                currentIndex === product.images.length - 1
              }
            />
          )}
        </div>

        {product?.images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer bg-white overflow-y-auto"
            onClick={() => handleImageClick(image, index)}
          >
            <Image
              className="object-cover w-16 h-16"
              src={image}
              alt={`Img ${index}`}
              width={300}
              height={300}
            />
          </div>
        ))}

        <div className="cursor-pointer">
          {product.images.length > 1 && (
            <ArrowForwardIosIcon
              onClick={handleNext}
              disabled={product.images.length <= 1 || currentIndex === 0}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
