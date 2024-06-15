import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing react-icons for arrow icons

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={className}
      style={{ ...style, color: "green", display: "block" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{ ...style, color: "green", display: "block" }}
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
