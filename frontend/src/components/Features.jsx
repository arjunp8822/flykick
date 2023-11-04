import React from "react";
import BannerImg from "../assets/banner-img.png";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      title: "Video Content",
      content: "This is some text content you need to write",
      img: BannerImg,
      cta: "CTA",
      reverse: false,
    },
    {
      title: "Neural Relationship Networks",
      content: "This is some text content you need to write",
      img: BannerImg,
      cta: "CTA",
      reverse: true,
    },
    {
      title: "Next Best Action",
      content: "This is some text content you need to write",
      img: BannerImg,
      cta: "CTA",
      reverse: false,
    },
  ];

  return (
    <div>
      <h5 className="mb-4 text-bg-cta font-medium">Immediate value</h5>
      <h4 className="text-font-primary font-medium mb-8 md:mb-12">
        Here is how FlyKick will benefit your business
      </h4>
      <div className="flex flex-col gap-8 lg:gap-16 justify-center items-center">
        {features.map((x) => (
          <FeatureCard
            title={x.title}
            content={x.content}
            img={x.img}
            cta={x.cta}
            reverse={x.reverse}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
