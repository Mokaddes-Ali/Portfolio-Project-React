// import heroImage from '../assets/Images/heroimg.png';

// import {motion} from 'framer-motion';
// import {slideUpVariants, zoomInVariants} from './animation';
// import background from '../assets/Images/homeimg.webp';


// const HeroSection = () => {
//   return (
//     <>
//     <div id ="hero" className=" bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px]
//     flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center " style={{backgroundImage: `url(${background})`}}>
//         <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         variants={slideUpVariants}
//          className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4">
//             <motion.h1
//             initial="hidden"
//             whileInView="visible"
//             variants={slideUpVariants}
//             className="text-yellow-500 text-3xl font-bold">We are here to help you</motion.h1>
//             <motion.p
//             initial="hidden"
//             whileInView="visible"
//             variants={slideUpVariants}
//             className="text-white text-5xl uppercase font-extrabold">
//                 we will build your dream
//             </motion.p>
//             <motion.div
//              variants={slideUpVariants}
//              className="bg-yellow-500 w-[120px] h-[6px]"></motion.div>
//             <motion.div className="text-white">
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis dolore assumenda nulla laborum quisquam, quia voluptate voluptates. 
//                     Aliquid sapiente repudiandae eos commodi labore.</p>

//             </motion.div>
           
           
//             <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         variants={zoomInVariants}
//          className="flex justify-center gap-5">

            
//             <motion.button
//             initial="hidden"
//             whileInView="visible"
//             variants={zoomInVariants}
//             className="text-white hover:text-yellow-500 border-white hover:border-yellow-500 border-2 px-10 py-3  rounded-lg">REACH US</motion.button>
//         </motion.div>
//         </motion.div>
//         <div className="w-[40%] flex flex-col justify-end items-end ">
//             <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={zoomInVariants}
//             >
//                 <img src={heroImage} alt="hero" className="lg:h-[600px] lg:mb-[-100px]" />
//             </motion.div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default HeroSection


import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import heroImage from '../assets/Images/heroimg.png';
import {slideUpVariants, zoomInVariants} from './animation';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const HeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Beta Now Live!
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Decrease your SaaS churn by over 90%
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
          distinctio eum impedit nihil ipsum modi.
        </p> */}

<motion.div 
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
         className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4">
            <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="text-yellow-500 text-3xl font-bold">We are here to help you</motion.h1>
            <motion.p
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="text-white text-5xl uppercase font-extrabold">
                we will build your dream
            </motion.p>
            <motion.div
             variants={slideUpVariants}
             className="bg-yellow-500 w-[120px] h-[6px]"></motion.div>
            <motion.div className="text-white">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis dolore assumenda nulla laborum quisquam, quia voluptate voluptates. 
                    Aliquid sapiente repudiandae eos commodi labore.</p>

            </motion.div>
        </motion.div>

        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Start free trial
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="w-[40%] flex flex-col justify-end items-end ">
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            >
                <img src={heroImage} alt="hero" className="lg:h-[600px] lg:mb-[-100px]" />
            </motion.div>
        </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};