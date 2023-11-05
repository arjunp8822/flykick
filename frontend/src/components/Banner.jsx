import React from "react";
import BannerImg from "../assets/banner.png";
import Integrations from "./Integrations";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-6/12 flex flex-col gap-8 lg:gap-12">
          <h1>Refine and improve your sales with AI</h1>
          <h4 className="text-font-secondary">
            Do you want to boost revenue and make predictions with accuracy?
          </h4>
          <button className="bg-bg-cta text-white w-fit hover:bg-white hover:text-bg-cta border border-bg-cta transition-all duration-150">
            <a href="#onboard">Join the waitlist</a>
          </button>
        </div>
        <div className="w-full lg:w-6/12 shadow-xl">
          <img src={BannerImg} alt="FlyKick UI" className="w-full h-full" />
        </div>
      </div>
      <div className="mt-16 lg:mt-32">
        <Integrations />
      </div>
    </div>
  );
};

export default Banner;
