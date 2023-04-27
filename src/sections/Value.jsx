import React, { useState } from "react";
import value from "../assets/value.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import data from "../utils/accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Value = () => {
  return (
    <section
      id="ourvalue"
      className="bg-white md:h-fit lg:h-screen scroll-mt-[5rem]"
    >
      <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between p-[1.5rem]  w-full md:max-w-[45rem] lg:max-w-[1280px] flex-wrap mx-auto">
        {/* Left section */}
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 md:p-[1.5rem]"
        >
          <div
            className="w-[95%] md:w-[30rem] h-[25rem] md:h-[36rem] overflow-hidden 
        border-8
        border-solid
        border-[rgba(232,232,232,93%)] 
        rounded-tr-[15rem]
        rounded-tl-[15rem] md:ml-[5rem] lg:ml-0"
          >
            <img src={value} alt="value__img" className="w-full h-full" />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col items-start justify-start px-2 flex-1 mt-8 md:mt-0 lg:ml-[10rem]"
        >
          <h2 className="text-orange-400 text-xl md:text-2xl font-bold mb-2">
            Our Value
          </h2>
          <h2 className="text-primary text-2xl md:text-4xl font-bold mb-2">
            Value We Give to You
          </h2>
          <span className="text-secondaryText">
            We always ready to help by providing the best services for you.
          </span>
          <span className="text-secondaryText mb-2">
            We beleive a good blace to live can make your life better
          </span>
          <div className="mt-10 w-full px-4 md:px-0 mx-auto">
            <Accordion
              allowMultipleExpanded={false}
              preExpanded={[0]}
              className="border-none mt-4"
            >
              {data.map((item, index) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem
                    key={index}
                    uuid={index}
                    className={`bg-white border-[0.8px] border-solid border-[rgba(128,128,128,0.143)] 
                  rounded-md overflow-hidden mb-5  shadow-lg ${className}`}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flex items-center justify-between bg-white p-4 cursor-pointer w-full">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flex items-center justify-center text-[#4066ff] p-3">
                          {item.icon}
                        </div>
                        <span className="text-primary text-sm md:text-xl font-bold">
                          {item.heading}
                        </span>
                        <div className="flex items-center justify-center">
                          <MdOutlineArrowDropDown size={20} color="#4066ff" />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="text-secondaryText text-sm p-4">
                      {item.detail}
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Value;
