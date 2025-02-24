
        

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
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


const getCircleSize = () => {
  const width = window.innerWidth;


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
  variants={slideUpVariants}
  className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 lg:gap-8"
>
  <motion.h1
    initial="hidden"
    whileInView="visible"
    variants={zoomInVariants}
    className="text-yellow-500 lg:text-2xl text-xl font-bold"
  >
    <Typewriter text="Hii, I'm Mokaddes Ali" speed={100} />
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-white text-3xl  lg:text-4xl uppercase font-extrabold"
  >
      Full Stack Developer | React & Laravel
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
    I build user-friendly websites and applications with a focus on clean and efficient code using React and Laravel.
  </motion.p>

  {/* Buttons */}
  <div className="flex gap-4 mt-6">
    {/* Download CV Button */}
    <motion.button
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      style={{ border, boxShadow }}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className="group relative flex items-center gap-1.5 rounded-full bg-yellow-500 px-6 py-3 text-white transition-colors hover:bg-yellow-600"
    >
      Download CV
      <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
    </motion.button>

    {/* Contact Me Button */}
    <motion.button
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      style={{ border, boxShadow }}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className="group relative flex items-center gap-1.5 rounded-full bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
    >
      Contact Me
      <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
    </motion.button>
  </div>
</motion.div>


      {/* Right Side (Image & Circles) */}
      <div className="relative flex justify-center p-4 lg:ml-10 items-center w-full mt-[120px] mb-10 h-[300px] lg:mt-5 lg:py-4 lg:mb-5 lg:w-1/2">
        {/* Main Image (Center) */}
        <motion.div

initial="hidden"
whileInView="visible"
variants={zoomInVariants}
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