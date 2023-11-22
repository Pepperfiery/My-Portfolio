import React from "react";
import { BsBriefcase, BsCardChecklist, BsBinoculars } from "react-icons/bs";
import { motion } from 'framer-motion'
import {fadeIn} from '../components/variants'


const Services = () => {
  return (
    <div id="services" className="w-full h-full bg-[#f0e6e6] flex flex-col text-black items-center gap-7 justify-center container mx-auto px-4 xs:px-6 md:px-8 ">
      
      <div className="mt-24">
        <h1 className="font-bold text-5xl text-center text-[#34012F] font-vibes] ">SERVICES</h1>
        <p className="mr-10 text-[#34012F] text-center">
        Empowering your digital presence through innovative web solutions.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  md:flex-row w-full gap-6 items-center  ">
       {/*card*/}
        <motion.div
          variants= {fadeIn('right', 0.3)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7}}
         className="bg-[#FCF9F9] w-72 h-80 lg:w-96 lg:h-96 md:h-80  flex flex-col items-center gap-3 rounded-md p-4 lg:p-11  shadow shadow-gray-300 	">
          <div className="border-4 lg:border-8	border-[#34012F]	rounded-full w-14 h-14 lg:w-28 lg:h-28 flex justify-center items-center  hover:bg-[#34012F] hover:border-[#92748b] hover:text-white">
            <BsBriefcase size='1.5rem' />
             </div>
             <h1 className=" text-lg lg:text-2xl  md:text-sm font-[vibes] font-bold text-[#d84e65]">WEB DESIGN</h1>
             <p className="text-[#34012F] text-md md:text-sm ">Elevate Your Online Presence with Stunning Web Design. Our web designers bring your brand to life through captivating visuals and intuitive user experiences. From eye-catching layouts to seamless navigation, we craft websites that leave a lasting impression.</p>
        </motion.div>
        <motion.div
        variants= {fadeIn('down', 0.3)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7}}
        className="bg-[#FCF9F9] w-72 h-80 lg:w-96 lg:h-96 md:h-80 flex flex-col items-center gap-3 rounded-md p-4 lg:p-11 shadow shadow-gray-300">
        <div className="border-4 lg:border-8	border-[#34012F]	rounded-full w-14 h-14 lg:w-28 lg:h-28 flex justify-center items-center hover:bg-[#34012F] hover:border-[#92748b] hover:text-white">
            <BsCardChecklist size='1.5rem' /> 
            </div>
            <h1 className=" text-lg lg:text-2xl md:text-sm font-[vibes] font-bold text-[#d84e65]">WEB DEVELOPMENT</h1>
             <p className="text-[#34012F] text-md md:text-sm">Transforming Ideas into Dynamic Digital Solutions. Our web development team turns your concepts into functional and interactive websites. Using cutting-edge technologies, we create robust platforms that engage users and drive your online goals.</p>       
                </motion.div>
        <motion.div 
        variants= {fadeIn('left', 0.3)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7}}
        className="bg-[#FCF9F9] w-72 h-80 lg:w-96 lg:h-96  md:h-80 flex flex-col items-center gap-3 rounded-md p-4 lg:p-11 shadow shadow-gray-300">
          <div className="border-4 lg:border-8	border-[#34012F]	rounded-full w-14 h-14 lg:w-28 lg:h-28 flex justify-center items-center hover:bg-[#34012F] hover:border-[#92748b] hover:text-white">
            <BsBinoculars size='1.5rem' /> </div>
            <h1 className=" text-lg md:text-sm lg:text-2xl font-[vibes] font-bold text-[#d84e65]">RESPONSIVE DESIGN</h1>
             <p className="text-[#34012F] text-md md:text-sm">Adaptability Across Devices, Seamlessness Across Screens. Ensure your website looks and functions flawlessly on every device. Our responsive design experts optimize your site for mobile, tablet, and desktop, delivering a consistent and user-friendly experience.</p>      
                 </motion.div>
       
        {/*card*/}
      </div>
    </div>

  );
};

export default Services;
