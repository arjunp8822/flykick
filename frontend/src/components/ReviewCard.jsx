import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = (props) => {
  return (
    <div className="flex flex-col gap-2 shadow-xl px-4 py-8 rounded justify-between bg-white">
      <div className="flex justify-between items-center h-16">
        <h5 className="font-medium text-cta">{props.company}</h5>
        <img
          src={props.img}
          alt="Logo"
          className="w-12 rounded-full object-cover"
        />
      </div>
      <p className="text-font-secondary h-32 text-sm">{props.review}</p>
      <div className="flex items-center gap-1">
        <AiFillStar className="text-yellow-400" />
        <AiFillStar className="text-yellow-400" />
        <AiFillStar className="text-yellow-400" />
        <AiFillStar className="text-yellow-400" />
        <AiFillStar className="text-yellow-400" />
      </div>
    </div>
  );
};

export default ReviewCard;
