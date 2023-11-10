import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex gap-2 justify-center items-center flex-col">
      <div className="flex flex-row gap-2 mb-2">
        <AiFillCopyrightCircle className="text-bg-cta text-2xl" />
        <div className="cursor-pointer hover:text-gray-400 transition duration-100">
          <p className="text-font-primary font-medium">
            FlyKick 2023. All rights reserved.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <p>ABN 88 672 225 268</p>
      </div>
      <div>
        <a href="/privacy">Privacy policy</a>
      </div>
    </div>
  );
};

export default Footer;
