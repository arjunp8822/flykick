import React from "react";
import BannerImg from "../assets/action.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-6/12 flex flex-col gap-8 lg:gap-12">
        <h1>Refine and improve your sales with AI</h1>
        <h4>
          Do you want to boost revenue and make predictions with accuracy?
        </h4>
        <button className="bg-bg-cta text-white w-fit">
          Join the waitlist
        </button>
      </div>
      <div className="w-full lg:w-6/12 shadow-xl">
        <img src={BannerImg} alt="FlyKick UI" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Banner;
