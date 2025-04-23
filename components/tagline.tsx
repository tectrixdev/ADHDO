"use client";
import { easeInOut, motion, MotionValue } from "motion/react";
import { Kranky } from "next/font/google";
import { ReactNode } from "react";

const main = Kranky({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

interface Props {
  line: string;
}

const Tagline: React.FC<Props> = ({ line }) => {
  return (
    <motion.h1
      id="tagline"
      className={`${main.className} mx-auto mb-5 mt-10 w-fit select-none text-center text-6xl text-white drop-shadow-xl md:text-7xl lg:text-8xl`}
      initial={{ y: -100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      {line}
    </motion.h1>
  );
};

export default Tagline;
