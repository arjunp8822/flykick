import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const scrollToSection = (sectionId) => {
    const targetElement = document.querySelector(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setShowMobileNav(false);
    }
  };

  useEffect(() => {
    // Handle hash-based navigation if there is a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <div className="mx-auto px-4 xl:px-12 max-w-7xl flex justify-between items-center h-16 md:h-20">
      <motion.a
        href="/"
        initial={{ translateY: "-32px", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "just", duration: 0.5, delay: 0 }}
      >
        <img src={Logo} alt="FlyKick" className="w-24" />
      </motion.a>

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
              className="flex justify between items-center w-full border-b pb-4"
              onClick={() => scrollToSection("#benefits")}
            >
              <a
                className="flex justify-between w-full items-center"
                href="/#benefits"
              >
                <h5>Benefits</h5>
                <AiOutlineRight className="text-lg" />
              </a>
            </li>
            <li
              className="flex justify-between items-center w-full border-b pb-4"
              onClick={() => scrollToSection("#features")}
            >
              <a
                className="flex justify-between w-full items-center"
                href="/#features"
              >
                <h5>Features</h5>
                <AiOutlineRight className="text-lg" />
              </a>
            </li>

            <li
              className="flex justify-between items-center text-center w-full border-b pb-4"
              onClick={() => scrollToSection("#reviews")}
            >
              <a
                className="flex justify-between w-full items-center"
                href="/#reviews"
              >
                <h5>Reviews</h5>
                <AiOutlineRight className="text-lg" />
              </a>
            </li>
            <li className="mt-8 w-full">
              <a href="/#onboard">
                <button
                  className="bg-bg-cta text-white w-full hover:bg-white hover:text-bg-cta border border-bg-cta transition-all duration-150"
                  onClick={() => scrollToSection("#onboard")}
                >
                  Join the waitlist
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <motion.div
        className="text-2xl md:hidden"
        initial={{ translateY: "-32px", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "just", duration: 0.5, delay: 0.2 }}
      >
        <FiMenu onClick={() => setShowMobileNav(true)} />
      </motion.div>

      {/* web nav */}
      <div className="hidden md:flex">
        <ul className="flex gap-8 items-center font-semibold text-font-primary">
          <motion.li
            className="cursor-pointer hover:text-gray-500"
            initial={{ translateY: "-32px", opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "just", duration: 0.5, delay: 0.1 }}
          >
            <a href="/#benefits">
              <h5>Benefits</h5>
            </a>
          </motion.li>

          <motion.li
            className="cursor-pointer hover:text-gray-500"
            initial={{ translateY: "-32px", opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "just", duration: 0.5, delay: 0.2 }}
          >
            <a href="/#features">
              <h5>Features</h5>
            </a>
          </motion.li>

          <motion.li
            className="cursor-pointer hover:text-gray-500"
            initial={{ translateY: "-32px", opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "just", duration: 0.5, delay: 0.3 }}
          >
            <a href="/#reviews">
              <h5>Reviews</h5>
            </a>
          </motion.li>
          <motion.li
            initial={{ translateY: "-32px", opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "just", duration: 0.5, delay: 0.4 }}
          >
            <a href="/#onboard">
              <button className="bg-bg-cta text-white hover:bg-white hover:text-bg-cta border border-bg-cta transition-all duration-150">
                Join the waitlist
              </button>
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
