import React from "react";
import "./index.css";

const Banner = ({ image, text, colored, text2 }) => {
  return (
    <div className="banner group flex justify-center w-full h-40 sm:h-full my-6 hover:shadow-[0_15px_30px_-8px_rgba(0,0,0,0.6)] ease-in duration-200 overflow-hidden text-center relative cursor-pointer">
      <img
        src={image}
        alt="banner"
        className="scale-110 group-hover:scale-100 ease-in duration-200 banner-img"
        loading="lazy"
      ></img>
      <p className="absolute top-[30%] sm:top-[30%] left-1/2 -translate-x-1/2 font-bold text-white md:text-4xl sm:text-2xl ">
        {text} <span className="text-[#cea656]">{colored}</span> {text2}
      </p>
    </div>
  );
};

export default Banner;
