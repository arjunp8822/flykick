import React from "react";
import BenefitCard from "./BenefitCard";
import ReclaimControl from "../assets/reclaimcontrol.png";
import RampUp from "../assets/rampup.png";
import Visibility from "../assets/visibility.png";

const Benefits = () => {
  const benefits = [
    {
      title: "Reclaim Control",
      content:
        "Reclaim control of the revenue process with AI, streamline your sales strategies, and watch your business thrive like never before. Empower your sales team with data-driven insights and cutting-edge technology, and take charge of your success today.",
      img: ReclaimControl,
    },
    {
      title: "Ramp Up Sales",
      content:
        "Elevate your sales executives to peak performance instantly. Equip your team with real-time, AI-driven support to accelerate their sales acumen. Witness a rapid transformation in your salesforce, as they gain the skills and knowledge they need to excel, right when they need it.",
      img: RampUp,
    },
    {
      title: "Full Visibility",
      content:
        "Gain complete insight into your entire sales pipeline. Enjoy a panoramic view of every stage, ensuring you're always in the know about your sales process. Achieve full transparency and make informed decisions with ease.",
      img: Visibility,
    },
  ];
  return (
    <div>
      <h5 className="mb-4 text-bg-cta font-medium">Immediate value</h5>
      <h4 className="text-font-primary font-medium mb-8 md:mb-12">
        Here is how FlyKick will benefit your business
      </h4>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center items-center">
        {benefits.map((x) => (
          <BenefitCard title={x.title} content={x.content} img={x.img} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
