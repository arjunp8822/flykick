import React from "react";
import Video from "../assets/video.png";
import NRN from "../assets/nrn.png";
import Action from "../assets/action.png";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      title: "Video Content",
      content:
        "Tap into the proven power of video content in sales. Videos engage and persuade like no other medium, enhancing your communication with customers, boosting conversion rates, and driving sales success. Don't miss the opportunity to leverage the remarkable impact of video analysis with AI in your sales strategy.",
      img: Video,
      cta: "Find out more",
      reverse: false,
    },
    {
      title: "Neural Relationship Networks",
      content:
        "With NRNs, you can harness the full potential of your data and gain a deeper understanding of intricate relationships within your business ecosystem. This powerful tool enables you to make more informed decisions, optimise processes, and unlock new opportunities for growth. By incorporating NRNs into your strategy, you can navigate the complexities of your data landscape with confidence, revealing hidden insights and achieving new levels of success.",
      img: NRN,
      cta: "Find out more",
      reverse: true,
    },
    {
      title: "Next Best Action",
      content:
        "With 'Next Best Action' your sales process becomes smarter and more efficient. AI-driven prompts provide real-time insights, empowering your team to make informed choices that lead to increased revenue, improved customer relationships, and streamlined operations. Say goodbye to guesswork and hello to data-driven success with this invaluable sales ally.",
      img: Action,
      cta: "Find out more",
      reverse: false,
    },
  ];

  return (
    <div>
      <h5 className="mb-4 text-bg-cta font-medium">Immediate value</h5>
      <h4 className="text-font-primary font-medium mb-8 md:mb-12">
        Here is how FlyKick will benefit your business
      </h4>
      <div className="flex flex-col gap-8 lg:gap-24 justify-center items-center">
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
