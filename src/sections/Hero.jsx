import React from "react";
import heroImage from "../assets/hero-image.png";
import { HiMapPin } from "react-icons/hi2";
import Button from "../components/shared/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Hero = () => {
  const stats = [
    {
      name: "Premium Products",
      count: 9000,
    },
    {
      name: "Happy Customers",
      count: 2500,
    },
    {
      name: "Awards",
      count: 28,
    },
  ];
  return (
    <section className="bg-darkBlack md:h-screen">
      <div className="flex flex-col lg:flex-row  justify-between px-[1.5rem] py-10 mx-auto w-full md:max-w-[45rem] lg:max-w-[1280px]">
        {/* Left section */}
        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-start justify-center px-2"
        >
          <div className="relative z-10">
            <div className="absolute right-[28%] w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-orange-gradient top-[-10%] z-[-1]"></div>
            <h2 className="text-4xl md:text-6xl text-white lg:leading-[4rem]">
              Discover <br />
              Most Suitable <br />
              Property
            </h2>
          </div>
          <div className="flex flex-col justify-center items-cente md:items-start text-secondaryText w-full mt-8">
            <span>Find a variety of properties that suit you very easilty</span>
            <span className="mt-1 md:mt-0">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          {/* Search Container */}
          <div
            className="bg-white rounded-md shadow-md flex items-center justify-between mt-10 px-4 
          py-2 w-full"
          >
            <HiMapPin size={40} color="#4066ff" />
            <input
              type="search"
              className="w-full p-2 outline-none border-none text-lg"
            />
            <Button text={"Search"} />
          </div>

          {/* Stats */}
          <div
            className="flex mt-10 items-center lg:items-start justify-center md:justify-between lg:space-x-6 gap-6 md:gap-0 w-full 
          flex-wrap"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center flex-grow"
              >
                <span className="text-white text-2xl md:text-4xl">
                  {stat.count}{" "}
                  <span className="text-yellow-300 text-4xl">+</span>
                </span>
                <span className="text-secondaryText">{stat.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right section */}
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex justify-center items-center gap-8 flex-wrap mt-6"
        >
          <div
            className="w-[95%] md:w-[30rem] h-[25rem] md:h-[35rem] overflow-hidden 
        border-8
        border-solid
        border-[rgba(255,255,255,0.12)] 
        rounded-tr-[15rem]
        rounded-tl-[15rem]"
          >
            <img src={heroImage} alt="Hero Image" className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
