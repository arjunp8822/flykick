import React from "react";
import BannerImg from "../assets/banner-img.png";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      company: "Reclaim Control",
      review: "This is some text content you need to write",
      img: BannerImg,
    },
    {
      company: "Ramp Up Sales",
      review: "This is some text content you need to write",
      img: BannerImg,
    },
    {
      company: "Full Visibility",
      review: "This is some text content you need to write",
      img: BannerImg,
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
