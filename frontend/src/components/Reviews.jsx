import React from "react";
import Innovation from "../assets/innovation.svg";
import LevelUp from "../assets/levelup.svg";
import Solidarity from "../assets/solidarity.svg";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      company: "Innovation Digital Play",
      review:
        "We have been using FlyKick for a few months now, and the results have been incredible. It truly helps us regain control of our revenue process. It's a game-changer for our business.",
      img: Innovation,
    },
    {
      company: "LevelUp Financial Audit",
      review:
        "The real-time sales executive support is a game-changer! With this solution, our sales team has access to the guidance and knowledge they need right when they need it. The transformation in their performance has been remarkable.",
      img: LevelUp,
    },
    {
      company: "Solidarity",
      review:
        "I can't say enough about the full visibility we now have across our entire sales funnel. It has brought a new level of transparency and understanding to our sales process. Making informed decisions is easier than ever, and it's had a positive impact on our sales outcomes. ",
      img: Solidarity,
    },
  ];

  return (
    <div>
      <h5 className="mb-4 text-bg-cta font-medium">Immediate value</h5>
      <h4 className="text-font-primary font-medium mb-8 md:mb-12">
        Here is how FlyKick will benefit your business
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <ReviewCard
            company={review.company}
            review={review.review}
            img={review.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
