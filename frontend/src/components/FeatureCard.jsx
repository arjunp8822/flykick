import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="bg-bg-primary w-full h-fit md:h-[28rem] rounded py-4 px-4 md:px-8">
      {!props.reverse && (
        <div className="flex flex-col gap-8 md:flex-row">
          <img
            src={props.img}
            alt={props.title}
            className="w-full rounded mb-4 object-cover md:w-1/2"
          />
          <div className="w-full flex flex-col justify-center gap-2 md:w-1/2">
            <h5 className="font-medium mb-2">{props.title}</h5>
            <p className="text-font-secondary mb-8">{props.content}</p>
            <button className="bg-bg-cta text-white w-fit">{props.cta}</button>
          </div>
        </div>
      )}
      {props.reverse && (
        <div className="flex flex-col-reverse gap-8 md:flex-row">
          <div className="w-full flex flex-col justify-center gap-2 md:w-1/2">
            <h5 className="font-medium mb-2">{props.title}</h5>
            <p className="text-font-secondary mb-8">{props.content}</p>
            <button className="bg-bg-cta text-white w-fit">{props.cta}</button>
          </div>
          <img
            src={props.img}
            alt={props.title}
            className="w-full rounded mb-4 object-cover md:w-1/2"
          />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
