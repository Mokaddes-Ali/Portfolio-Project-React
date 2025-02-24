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


  //       import { Stars } from "@react-three/drei";
  //       import { Canvas } from "@react-three/fiber";
  //       import React, { useEffect, useState } from "react";
  //       import { FiArrowRight } from "react-icons/fi";
  //       import { FaLaravel, FaReact, FaJs, FaPhp } from "react-icons/fa"; // React Icons Import
  //       import {
  //         useMotionTemplate,
  //         useMotionValue,
  //         motion,
  //         animate,
  //       } from "framer-motion";
        
  //       import heroImage from '../assets/Images/23-removebg-preview.png';
  //       import { slideUpVariants, zoomInVariants } from './animation';

  //       const techIcons = [
  //         { icon: FaJs, color: "#F7DF1E" },
  //         { icon: FaReact, color: "#61DAFB" },
  //         { icon: FaPhp, color: "#777BB4" }, 
  //         { icon: FaLaravel, color: "#FF2D20" },
  //       ];
  //       const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
        
  //       const HeroSection = () => {
  //         const color = useMotionValue(COLORS_TOP[0]);

  //         const circleSizes = [300, 450, 600]; // ৩টি সার্কেলের আকার

  //         // const [currentTech, setCurrentTech] = useState(0);

  //         // // Auto change cards smoothly with animation
  //         // useEffect(() => {
  //         //   const interval = setInterval(() => {
  //         //     setCurrentTech((prev) => (prev + 1) % techStack.length);
  //         //   }, 2000);
  //         //   return () => clearInterval(interval);
  //         // }, []);
        
  //         useEffect(() => {
  //           animate(color, COLORS_TOP, {
  //             ease: "easeInOut",
  //             duration: 10,
  //             repeat: Infinity,
  //             repeatType: "mirror",
  //           });
  //         }, []);
        
  //         const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  //         const border = useMotionTemplate`1px solid ${color}`;
  //         const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
        
  //         return (
  //           <motion.section
  //             style={{
  //               backgroundImage,
  //             }}
  //             className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
  //           >
  //             {/* Left Side (Text Content) */}
  //             <motion.div
  //               initial="hidden"
  //               whileInView="visible"
  //               variants={slideUpVariants}
  //               className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 lg:gap-8"
  //             >
  //               <motion.h1
  //                 initial="hidden"
  //                 whileInView="visible"
  //                 variants={slideUpVariants}
  //                 className="text-yellow-500 text-3xl font-bold"
  //               >
  //                 We are here to help you
  //               </motion.h1>
  //               <motion.p
  //                 initial="hidden"
  //                 whileInView="visible"
  //                 variants={slideUpVariants}
  //                 className="text-white text-5xl uppercase font-extrabold"
  //               >
  //                 we will build your dream
  //               </motion.p>
  //               <motion.div
  //                 variants={slideUpVariants}
  //                 className="bg-yellow-500 w-[120px] h-[6px]"
  //               ></motion.div>
  //               <motion.div className="text-white">
  //                 <p>
  //                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis dolore assumenda nulla laborum quisquam, quia voluptate voluptates. Aliquid sapiente repudiandae eos commodi labore.
  //                 </p>
  //               </motion.div>
        
  //               {/* Button */}
  //               <motion.button
  //                 style={{
  //                   border,
  //                   boxShadow,
  //                 }}
  //                 whileHover={{
  //                   scale: 1.015,
  //                 }}
  //                 whileTap={{
  //                   scale: 0.985,
  //                 }}
  //                 className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
  //               >
  //                 Start free trial
  //                 <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
  //               </motion.button>
  //             </motion.div>
        
             
  //             {/* <motion.div
  //               initial="hidden"
  //               whileInView="visible"
  //               variants={zoomInVariants}
  //               className="lg:w-1/2 w-full flex justify-center lg:justify-end"
  //             >
  //               <img
  //                 src={heroImage}
  //                 alt="hero"
  //                 className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
  //               />
  //             </motion.div> */}
  //  {/* Right Side (Image & Circles) */}
  //     <div className="relative flex justify-center items-center w-full lg:w-1/2">
  //       {/* Main Image (Center) */}
  //       <motion.div
  //         initial={{ scale: 0.8, opacity: 0 }}
  //         animate={{ scale: 1, opacity: 1 }}
  //         transition={{ duration: 0.8, ease: "easeOut" }}
  //         className="absolute z-10"
  //       >
  //         <img
  //           src={heroImage}
  //           alt="hero"
  //           className="w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] h-full"
  //         />
  //       </motion.div>

  //       {/* Rotating Circles with Icons */}
  //       {circleSizes.map((size, index) => (
  //         <motion.div
  //           key={index}
  //           animate={{ rotate: 360 }}
  //           transition={{ duration: 15 - index * 3, repeat: Infinity, ease: "linear" }}
  //           className="absolute border-2 border-gray-500 rounded-full"
  //           style={{
  //             width: `${size}px`,
  //             height: `${size}px`,
  //           }}
  //         >
  //           {/* Icons rotating along the circle */}
  //           {techIcons.map(({ icon: Icon, color }, i) => {
  //             const angle = (i * (360 / techIcons.length)) * (Math.PI / 180);
  //             const radius = size / 2; // Circle's radius
  //             return (
  //               <motion.div
  //                 key={i}
  //                 animate={{ rotate: -360 }} // Opposite rotation for balance
  //                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
  //                 className="absolute bg-white p-4 rounded-full shadow-xl flex justify-center items-center"
  //                 style={{
  //                   top: `${radius + radius * Math.sin(angle)}px`,
  //                   left: `${radius + radius * Math.cos(angle)}px`,
  //                 }}
  //               >
  //                 <Icon className="text-4xl" style={{ color }} />
  //               </motion.div>
  //             );
  //           })}
  //         </motion.div>
  //       ))}
  //     </div>


  //             {/* Background Stars */}
  //             <div className="absolute inset-0 z-0">
  //               <Canvas>
  //                 <Stars radius={50} count={2500} factor={4} fade speed={2} />
  //               </Canvas>
  //             </div>
  //           </motion.section>
  //         );
  //       };
        
  //       export default HeroSection;
        

  import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaLaravel, FaReact, FaJs, FaPhp } from "react-icons/fa";
import {slideUpVariants, zoomInVariants} from './animation';
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import heroImage from '../assets/Images/22-removebg-preview.png';
import Typewriter from './Typewriter';

const techIcons = [
  { icon: FaPhp, color: "#777BB4" },
  { icon: FaLaravel, color: "#FF2D20" },
  { icon: FaJs, color: "#F7DF1E" },
  { icon: FaReact, color: "#61DAFB" },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const circleSizes = {
  default:[220, 300, 380], 
  lg: [300, 380, 480],
};


const sentences = [
  "I'm a Full Stack Web Developer",
];
// Get the correct size based on screen width
const getCircleSize = () => {
  const width = window.innerWidth;

  // For large devices (lg), return lg sizes
  if (width >= 1024) {
    return circleSizes.lg;  // Returns [400, 500, 700] for lg devices
  } else {
    return circleSizes.default;  // Returns [300, 450, 600] for default devices
  }
};

// Usage
const circleSize = getCircleSize();


const HeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      id ="hero" className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      {/* Left Side (Text Content) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 lg:gap-8"
      >
         <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
      className="text-yellow-500 lg:text-2xl text-xl font-bold"
    >
       <Typewriter text='I’m a Full Stack Developer,' speed={100} />
    
    </motion.h1>
 
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl uppercase font-extrabold"
        >
          We will build your dream
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-yellow-500 w-[120px] h-[6px]"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white text-xl lg:text-lg text-center lg:text-left"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis dolore assumenda nulla laborum quisquam, quia voluptate voluptates. Aliquid sapiente repudiandae eos commodi labore.
        </motion.p>

        {/* Button */}
        <motion.button
         initial="hidden"
         whileInView="visible"
         variants={zoomInVariants}
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50 mt-4"
        >
          Start free trial
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </motion.div>

      {/* Right Side (Image & Circles) */}
      <div className="relative flex justify-center p-4 lg:ml-10 items-center w-full mt-[120px] mb-10 h-[300px] lg:mt-2 lg:mb-5 lg:w-1/2">
        {/* Main Image (Center) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute z-10"
        >
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-[400px] lg:w-[520px] h-auto -mb-52 lg:-mb-60"
          />
        </motion.div>

        {/* Rotating Circles with Icons */}
        {circleSize.map((size, index) => (
          <motion.div
            key={index}
            animate={{ rotate: 360 }}
            transition={{ duration: 15 - index * 3, repeat: Infinity, ease: "linear" }}
            className="absolute border-2 border-gray-500 rounded-full"
            style={{ width: size, height: size }}
          >
            {techIcons.map(({ icon: Icon, color }, i) => {
              const angle = (i * (360 / techIcons.length)) * (Math.PI / 180);
              const radius = size / 2;
              return (
                <motion.div
                  key={i}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute p-3 sm:p-4 rounded-full shadow-xl flex justify-center items-center"
                  style={{
                    top: `${radius + radius * Math.sin(angle)}px`,
                    left: `${radius + radius * Math.cos(angle)}px`,
                  }}
                >
                  <Icon className="text-5xl lg:text-5xl" style={{ color }} />
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>


      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;