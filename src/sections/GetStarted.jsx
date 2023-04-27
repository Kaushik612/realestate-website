import React from "react";
import Button from "../components/shared/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const GetStarted = () => {
  return (
    <section
      id="getstarted"
      className="h-fit  p-[1.5rem] mx-auto w-full md:max-w-[45rem] lg:max-w-[1280px] mt-[10rem] "
    >
      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="flex flex-col items-center justify-center p-[3rem] bg-blue-gradient rounded-md shadow-lg border-solid border-[6px] border-[#5d77d6]"
      >
        <h1 className="text-white text-2xl md:text-4xl mb-4 text-center">
          Get Started with Homyz
        </h1>
        <span className="text-secondary text-sm md:text-lg text-center">
          Subscribe and find super attractive price quotes from us.
        </span>
        <span className="text-secondary text-sm md:text-lg">
          Find your residence soon
        </span>

        <div>
          <button className="bg-blueBtn text-secondary px-4 py-2 rounded-md hover:scale-[1.025] transition-all duration-300 ease ml-auto mt-6 md:mt-8">
            Get Started
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
