import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center mt-16 overflow-hidden">
      {/* Floating Blur Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-[-120px] w-60 h-20 rounded-full bg-white/10 blur-3xl animate-[cloud1_25s_linear_infinite]" />

        <div className="absolute top-52 right-[-150px] w-72 h-24 rounded-full bg-white/10 blur-3xl animate-[cloud2_30s_linear_infinite]" />

        <motion.div
  animate={{
    x: [0, 80, 0],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-16 left-[-120px] w-60 h-20 rounded-full bg-white/10 blur-3xl"
/>
      </div>

      {/* Globe */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaGlobeAmericas className="w-28 h-28 text-white/90 drop-shadow-2xl mt-4 mb-6" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-white"
      >
        Weather Forecast
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="mt-4 max-w-md text-lg text-white/70"
      >
        Discover weather anywhere in the world.
      </motion.p>
    </div>
  );
};

export default Welcome;   