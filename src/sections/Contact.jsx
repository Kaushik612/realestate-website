import React from "react";
import { BiPhone, BiVideo, BiMessageDots } from "react-icons/bi";
import Button from "../components/shared/Button";
import { BsFillChatDotsFill } from "react-icons/bs";
import contact from "../assets/contact.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Contact = () => {
  const contacts = [
    {
      name: "Call",
      detail: "021 123 145 14",
      cta: "Call Now",
      icon: <BiPhone size={25} />,
    },
    {
      name: "Chat",
      detail: "021 123 145 14",
      cta: "Chat Now",
      icon: <BsFillChatDotsFill size={25} />,
    },
    {
      name: "Video",
      detail: "021 123 145 14",
      cta: "Video Now",
      icon: <BiVideo size={25} />,
    },
    {
      name: "Message",
      detail: "021 123 145 14",
      cta: "Message Now",
      icon: <BiMessageDots size={25} />,
    },
  ];
  return (
    <section id="contactus" className="bg-white scroll-mt-[5rem]">
      <div
        className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-28 
       justify-center lg:justify-between p-[1.5rem] mx-auto w-full md:max-w-[45rem] lg:max-w-[1280px]"
      >
        {/* Left section */}
        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col items-start justify-center w-full p-4"
        >
          <h1 className="text-orange-400 text-xl md:text-2xl font-bold mb-2">
            Contact Us
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            We are available 24/7
          </h1>
          <span className="text-secondaryText">
            We are always ready to help by providijng the best services for you.
          </span>
          <span className="text-secondaryText mb-2">
            We beleive a good blace to live can make your life better
          </span>

          <div className="grid md:grid-cols-2 gap-6 w-full mt-10">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-200 shadow-lg rounded-md items-start justify-start 
                px-8 py-10"
              >
                <div>
                  <div className="flex flex-row items-center justify-start gap-6">
                    <div className="flex">{contact.icon}</div>
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-primary font-bold text-lg">
                        {contact.name}
                      </span>
                      <span className="text-secondaryText">
                        {contact.detail}
                      </span>
                    </div>
                  </div>
                </div>
                <Button text={contact.cta} className={"mt-4 w-full"} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="w-[95%] md:w-[70%] lg:w-[60rem] h-[25rem] md:h-[32rem] lg:h-[38rem] overflow-hidden 
        border-8
        border-solid
        border-[rgba(232,232,232,93%)] 
        rounded-tr-[15rem]
        rounded-tl-[15rem] mt-6 lg:mt-0 flex items-center justify-center"
        >
          <img src={contact} alt="contact__img" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
