import React from "react";
import "./index.css";

const Button = ({ image, text, alt }) => {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg max-w-[330px] h-[150px] cursor-pointer group button-div">
      <img
        className="button-image ml-4"
        width={113}
        height={113}
        src={image}
        alt={alt}
      ></img>
      <p className="mx-4 text-2xl group-hover:text-[#cea656] ease-in-out delay-150 text-[#339999]">
        {text}
      </p>
    </div>
  );
};

export default Button;
