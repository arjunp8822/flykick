import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-2 justify-center items-center">
        <AiFillCopyrightCircle className="text-bg-cta text-2xl" />
        <h3 className="cursor-pointer hover:text-gray-400 transition duration-100">
          <a href="/">
            <h5 className="text-font-primary font-medium">FlyKick 2023</h5>
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
