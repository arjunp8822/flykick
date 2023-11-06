import React from "react";
import BannerImg from "../assets/banner.png";
import Integrations from "./Integrations";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "just",
        duration: 0.8,
        delay: 0.1,
      }}
    >
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-6/12 flex flex-col gap-8 lg:gap-12">
          <h1>Refine and improve your sales with AI</h1>
          <h4 className="text-font-secondary">
            Do you want to boost revenue and make predictions with accuracy?
          </h4>
          <div>
            <button className="bg-bg-cta text-white w-fit hover:bg-white hover:text-bg-cta border border-bg-cta transition-all duration-150">
              <a href="#onboard">Join the waitlist</a>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 shadow-xl">
          <img src={BannerImg} alt="FlyKick UI" className="w-full h-full" />
        </div>
      </div>
      <div className="mt-16 lg:mt-32">
        <Integrations />
      </div>
    </motion.div>
  );
};

export default Banner;
