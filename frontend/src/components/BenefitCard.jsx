import React from "react";

const BenefitCard = (props) => {
  return (
    <div className="bg-bg-primary w-full h-96 shadow-xl rounded p-4 flex flex-col">
      <img src={props.img} alt={props.title} className="h-2/3 rounded mb-4" />
      <div className="h-1/3">
        <h5 className="font-medium mb-2">{props.title}</h5>
        <p className="text-font-secondary">{props.content}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
