"use client";
import { motion } from "motion/react";
import { Rubik_Glitch } from "next/font/google";
import { Rubik_Mono_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  color: number;
  //logic ;)
  button: string;
}

const main = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const second = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const Card: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  color,
  button,
}) => {
  return (
    <motion.div
      id={`Card.${title}`}
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{ duration: 1.5, type: "spring" }}
      className="group h-full w-full max-w-xs overflow-hidden rounded-xl border-2 bg-black/25 shadow-2xl"
      style={{ backdropFilter: `hue-rotate(${color}deg) blur(12px)` }}
    >
      <Link href={projectUrl}>
        <Image
          src={`/${imageUrl}`}
          alt={title}
          className="h-36 w-full border-b-2 border-white object-cover transition-transform hover:scale-[1.15] group-odd:hover:-rotate-3 group-even:hover:rotate-3"
          width={400}
          height={400}
        />
      </Link>
      <div
        id={`innercontent.${title}`}
        className="p-4"
      >
        <h4
          className={`text-center text-white ${main.className} p-4 text-2xl`}
          id={`title.${title}`}
        >
          {title}
        </h4>
        <p
          className={`text-center text-sm font-bold text-white ${second.className}`}
          id={`description.${title}`}
        >
          {description}
        </p>
        <Link
          href={projectUrl}
          className={`bg-blur-lg mt-8 flex h-full w-full flex-col border-t-2 border-dashed p-3 text-center text-white transition-all ${second.className}`}
        >
          {button}
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
