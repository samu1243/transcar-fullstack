import React from "react";
import "./index.css";

const Card = ({ text, src }) => {
  return (
    <div className="bg-white rounded-md shadow-[0_15px_30px_-8px_rgba(0,0,0,0.6)] cursor-pointer main">
      <div className="mx-2 my-2 rounded-sm overflow-hidden image">
        <img
          src={src}
          alt="servicios"
          width={570}
          height={290}
          className="scale-110 hover:scale-100 ease-in duration-200"
        ></img>
        <div className=""></div>
      </div>
      <div className="text-center py-2">
        <p className="font-semibold text-2xl">{text}</p>
      </div>
    </div>
  );
};

export default Card;
