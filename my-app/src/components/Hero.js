import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";


const Hero = () => {
  return (
    <div id="home" className="text-[#34012F] bg-[#f0e6e6] flex items-center justify-center mx-auto container ">
      
      <div className="max-w-[800px] xl:mt-[-70px] w-full h-screen mx-auto  text-center flex flex-col gap-3 items-center justify-center overflow-hidden">
      {/* <h1 className="text-xl font-bold px-1 flex self-start pl-24">Hi, My Name is </h1> */}

        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="  flex flex-col lg:flex-row lg:gap-5 "
        >
          <h1 className="md:text-7xl xs:text-5xl text-2xl font-bold">Iswat Owokoniran </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:text-5xl xs:text-3xl text-2xl font-bold flex flex-row gap-3 py-1"
        >
          <span className=" ">I am a</span>
          <TypeAnimation
            sequence={["Developer", 2000, "Designer", 2000, "Programmer", 2000]}
            speed={50}
            className="text-[#d84e65] "
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-row gap-3 py-3"
        ></motion.div>
          {/* <motion.button
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-[#d84e65] text-white py-2 px-2 hover:bg-[#8c4e6b] rounded-md"
          >
            Contact me
          </motion.button> */}
          <button class=" ">
          
  <a href="#contact" class="relative inline-block text-lg group">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#34012F] transition-colors duration-300 ease-out border-2 border-[#34012F] rounded-lg group-hover:text-white">
      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#d84e65] group-hover:-rotate-180 ease">
        </span><span class="relative font-semibold md:text-2xl">Get In Touch</span>
        </span><span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#d84e65] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
        </button>

          
        
        <motion.p
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-3xl font-bold  "
        >
          {" "}
          I am a Web Developer and Programmer. I specialize in creating  Web applications with Javascript.{" "}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
