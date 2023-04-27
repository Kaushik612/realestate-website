import React from "react";
import proLogis from "../assets/prologis.png";
import equinox from "../assets/equinix.png";
import tower from "../assets/tower.png";
import realty from "../assets/realty.png";
import sliderData from "../utils/slider.json";
import { data } from "../utils/slider";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettings } from "../utils/sliderConfig";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Residencies = () => {
  const companies = [proLogis, equinox, tower, realty];
  return (
    <section id="residencies" className="bg-white lg:h-screen scroll-mt-[5rem]">
      <div className="px-[1.5rem] py-10 mx-auto w-full md:max-w-[45rem] lg:max-w-[1280px] overflow-hidden">
        {/* Logos */}
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between"
        >
          {companies.map((company, index) => (
            <img
              key={index}
              src={company}
              alt="company__images"
              className="w-40 h-20 self-center"
            />
          ))}
        </motion.div>

        {/* Popular Residencies */}
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mt-16"
        >
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h2 className="text-orange-400 font-bold text-base md:text-2xl ">
              Best Choices
            </h2>
            <h1 className="text-primary font-bold text-2xl md:text-4xl">
              Popular Residencies
            </h1>
          </div>

          {/* Slider Data */}
          <div className="mt-10 ml-10 md:ml-0">
            <Swiper {...sliderSettings}>
              <SliderButtons />
              {data.map((card, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="flex items-start justify-center flex-col gap-3 p-2 md:p-4 rounded-md max-w-fit m-auto transition-all duration-300 ease-in hover:cursor-pointer hover:scale-[1.025]
                  hover:bg-card-gradient hover:shadow-cardShadow"
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full max-w-[15rem]"
                    />
                    <span className="text-orange-400 font-bold text-xl">
                      $&nbsp;
                      <span className="text-secondaryText text-xl md:text-2xl">
                        {card.price}
                      </span>
                    </span>
                    <h1 className="text-primary font-bold text-xl md:text-2xl">
                      {card.name}
                    </h1>
                    <span className="text-secondaryText text-sm">
                      {card.detail}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="hidden md:flex items-center justify-center gap-2 mt-2 md:mt-0 md:absolute top-[-4rem] right-0 flex-wrap">
      <BiLeftArrow
        size={30}
        onClick={() => swiper.slidePrev()}
        className="bg-blueBtn p-2 shadow-lg rounded-md text-white hover:cursor-pointer hover:bg-blue-gradient"
      />
      <BiRightArrow
        size={30}
        onClick={() => swiper.slideNext()}
        className="bg-blueBtn p-2 shadow-lg rounded-md text-white hover:cursor-pointer hover:bg-blue-gradient"
      />
    </div>
  );
};

export default Residencies;
