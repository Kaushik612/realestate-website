import React from "react";
import logo from "../assets/logo2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Footer = () => {
  const links = ["property", "services", "products", "about us"];
  return (
    <section>
      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="flex flex-col md:flex-row items-center md:items-start justify-between p-[1.5rem] mx-auto w-full md:max-w-[45rem] lg:max-w-[1280px] mt-1 md:mt-[10rem]"
      >
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="footer__logo" className="w-[120px] md:w-36" />
          <span className="text-secondaryText mt-4">
            Our vision is to make all people
          </span>
          <span className="text-secondaryText">
            the best place to live for them.
          </span>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <h2 className="text-primary text-2xl md:text-4xl font-bold">
            Information
          </h2>
          <span className="text-secondaryText">145 New York, FL 5467, USA</span>
          <div className="flex mt-2 md:mt-6">
            <ul className="flex space-x-2 md:space-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link}`}
                    className="uppercase text-sm md:text-base text-secondaryText font-semibold hover:text-gray-700 transition-all duration-300 ease-in"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
