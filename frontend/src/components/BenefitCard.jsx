import React from "react";

const BenefitCard = (props) => {
  return (
    <div className="bg-bg-primary w-full h-[32rem] shadow-xl rounded p-4 flex flex-col">
      <img src={props.img} alt={props.title} className="h-1/2 rounded mb-8" />
      <div className="h-1/2">
        <h5 className="font-medium mb-4">{props.title}</h5>
        <p className="text-font-secondary">{props.content}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
