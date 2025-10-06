"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Paragraph from "./ui/Paragraph";
import Statics from "./Statics";

const words = [
  "Clarity.",
  "Emotion.",
  "Identity.",
  "Energy.",
  "Creativity.",
  "Authenticity.",
  "Originality.",
  "Intensity.",
  "Versatility.",
  "Personality.",
  "Symmetry.",
  "Fluidity.",
  "Ingenuity.",
  "Visibility.",
  "Elegance.",
  "Intention.",
  "Connection.",
  "Perception.",
];

const clientImages = [
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isClient]);

  const currentWord = isClient ? words[index] : words[0];

  return (
    <>
      <section className="w-full min-h-screen flex flex-col md:flex-row md:justify-between items-start md:items-center px-6 md:px-20 py-0 bg-white">
        {/* Text Section */}
<div className="flex-1 mb-10 md:mb-0">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug sm:leading-tight text-gray-900 flex flex-wrap gap-2">
    <span>The Visual Design Studio Driven By</span>
    <span className="inline-flex items-baseline relative font-extrabold text-green-500 text-5xl sm:text-6xl md:text-7xl">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          className="inline-flex gap-[1px] pb-1 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05 },
            },
            exit: {
              transition: {
                staggerChildren: 0.03,
                staggerDirection: -1,
              },
            },
          }}
        >
          {currentWord.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
                exit: { y: -20, opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  </h1>

  <Paragraph>
    We transform ideas and brands into visual stories that drive real
    growth, no fluff, just impactful design that delivers results.
  </Paragraph>

  <div>
    <div className="flex -space-x-2">
      {clientImages.map((src, index) => (
        <div key={index} className="relative">
          <Image
            src={src || "/placeholder.svg"}
            alt={`Client ${index + 1}`}
            width={50}
            height={50}
            className="rounded-full aspect-square border-2 border-white object-cover"
          />
        </div>
      ))}
    </div>
    Trusted by 150+ businesses
  </div>

  <div className="flex gap-4 flex-wrap py-4">
    <button text={"Contact Us"} > GET STARTED </button>
  </div>
</div>


        {/* Image Section */}
        <div className="flex-2 flex w-full md:max-w-1/2 aspect-square">
          <Image
            src="/graphic designer working.gif"
            alt="Hero"
            width={720}
            height={720}
            className="object-cover rounded-2xl"
          />
        </div>
      </section>
      <Statics />
    </>
  );
};

export default HeroSection;
