import React from "react";
import BenefitCard from "./BenefitCard";
import ReclaimControl from "../assets/reclaimcontrol.png";
import RampUp from "../assets/rampup.png";
import Visibility from "../assets/visibility.png";
import { motion } from "framer-motion";

const Benefits = () => {
  const benefits = [
    {
      title: "Reclaim Control",
      content:
        "Reclaim control of the revenue process with AI, streamline your sales strategies, and watch your business thrive like never before. Empower your sales team with data-driven insights and cutting-edge technology, and take charge of your success today.",
      img: ReclaimControl,
      delay: 0.1,
    },
    {
      title: "Ramp Up Sales",
      content:
        "Elevate your sales executives to peak performance instantly. Equip your team with real-time, AI-driven support to accelerate their sales acumen. Witness a rapid transformation in your salesforce, as they gain the skills and knowledge they need to excel, right when they need it.",
      img: RampUp,
      delay: 0.3,
    },
    {
      title: "Full Visibility",
      content:
        "Gain complete insight into your entire sales pipeline. Enjoy a panoramic view of every stage, ensuring you're always in the know about your sales process. Achieve full transparency and make informed decisions with ease.",
      img: Visibility,
      delay: 0.5,
    },
  ];
  return (
    <motion.div
      id="benefits"
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "just",
        duration: 0.8,
      }}
    >
      <h5 className="mb-4 text-bg-cta font-medium">Immediate value</h5>
      <h4 className="text-font-primary font-medium mb-8 md:mb-12">
        Here is how FlyKick will benefit your business
      </h4>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center items-center">
        {benefits.map((x) => (
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "just",
              duration: 0.8,
              delay: x.delay,
            }}
          >
            <BenefitCard title={x.title} content={x.content} img={x.img} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Benefits;
