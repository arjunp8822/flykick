import React from "react";
import BenefitCard from "./BenefitCard";
import BannerImg from "../assets/banner-img.png";

const Benefits = () => {
  const benefits = [
    {
      title: "Reclaim Control",
      content: "This is some text content you need to write",
      img: BannerImg,
    },
    {
      title: "Ramp Up Sales",
      content: "This is some text content you need to write",
      img: BannerImg,
    },
    {
      title: "Full Visibility",
      content: "This is some text content you need to write",
      img: BannerImg,
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
