import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div className="mx-auto px-4 xl:px-12 max-w-7xl flex justify-between items-center h-16 md:h-20">
      <a href="/">
        <img src={Logo} alt="FlyKick" className="w-24" />
      </a>

      {/* mobile nav */}
      <div
        className={
          showMobileNav
            ? "fixed top-4 opacity-100 right-4 w-9/12 h-5/6 p-4 md:hidden bg-white shadow transition-all ease-in-out duration-300 z-10 rounded"
            : "fixed -top-full opacity-0 right-4 w-9/12 h-5/6 p-4 md:hidden bg-white shadow transition-all ease-in-out duration-300 z-10 rounded"
        }
      >
        <div className="h-full relative">
          <div className="flex justify-between absolute w-full">
            <a href="/">
              <img src={Logo} alt="FlyKick" className="w-24" />
            </a>
            <div className="text-2xl md:hidden">
              <AiOutlineClose onClick={() => setShowMobileNav(false)} />
            </div>
          </div>
          <ul className="flex flex-col justify-center items-center h-full gap-4 px-4 font-semibold text-font-primary">
            <li
              className="flex justify-between items-center w-full border-b pb-4"
              onClick={() => setShowMobileNav(false)}
            >
              <a
                href="#benefits"
                className="flex justify-between w-full items-center"
              >
                <h5>Benefits</h5>
                <AiOutlineRight className="text-lg" />
              </a>
            </li>
            <li
              className="flex justify-between items-center w-full border-b pb-4"
              onClick={() => setShowMobileNav(false)}
            >
              <a
                href="#features"
                className="flex justify-between w-full items-center"
              >
                <h5>Features</h5>
                <AiOutlineRight className="text-lg" />
              </a>
            </li>

            <li
              className="flex justify-between items-center text-center w-full border-b pb-4"
              onClick={() => setShowMobileNav(false)}
            >
              <a
                href="#reviews"
                className="flex justify-between w-full items-center"
              >
                <h5>Reviews</h5>
                <AiOutlineRight className="text-lg" />
              </a>
            </li>
            <li className="mt-8 w-full">
              <a href="#onboard">
                <button
                  className="bg-bg-cta text-white w-full"
                  onClick={() => setShowMobileNav(false)}
                >
                  Join the waitlist
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-2xl md:hidden">
        <FiMenu onClick={() => setShowMobileNav(true)} />
      </div>

      {/* web nav */}
      <div className="hidden md:flex">
        <ul className="flex gap-8 items-center font-semibold text-font-primary">
          <li className="cursor-pointer hover:text-gray-500">
            <a href="#benefits">
              <h5>Benefits</h5>
            </a>
          </li>

          <li className="cursor-pointer hover:text-gray-500">
            <a href="#features">
              <h5>Features</h5>
            </a>
          </li>

          <li className="cursor-pointer hover:text-gray-500">
            <a href="#reviews">
              <h5>Reviews</h5>
            </a>
          </li>
          <li>
            <a href="#onboard">
              <button className="bg-bg-cta text-white">
                Join the waitlist
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
