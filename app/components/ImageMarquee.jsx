"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function TwoRowCarousel({ images = [], title = "Trusted by teams worldwide" }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [secondRowImages, setSecondRowImages] = useState([]);
  const [hovered, setHovered] = useState(null);
  const hoverTimeout = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSecondRowImages(shuffleArray(images));
  }, [images]);

  const imageSize = isSmallScreen ? 120 : 180;
  const gap = isSmallScreen ? 16 : 24;
  const scrollSpeed = isSmallScreen ? 30 : 50;
  const repeatCount = 4;

  const allImagesRow1 = Array.from({ length: repeatCount }, () => images).flat();
  const allImagesRow2 = Array.from({ length: repeatCount }, () => secondRowImages).flat();

  const handleMouseEnter = (i) => {
    hoverTimeout.current = setTimeout(() => setHovered(i), 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setHovered(null);
  };

  const getImageClasses = (i) => {
    const baseClasses = "flex-shrink-0 rounded-2xl overflow-hidden transform transition-all duration-500 shadow-lg border border-gray-100";
    
    if (hovered === null) return `${baseClasses} hover:shadow-xl`;
    return hovered === i
      ? `${baseClasses} scale-110 shadow-2xl z-20`
      : `${baseClasses} scale-95 opacity-70`;
  };

  // Enhanced gradient edges with animation
  const GradientEdge = ({ side }) => (
    <div className={`absolute inset-y-0 ${side}-0 w-32 bg-gradient-to-${side === 'left' ? 'r' : 'l'} from-white via-white to-transparent z-10 pointer-events-none`} />
  );

  return (
    <div className="relative w-full overflow-hidden py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Helped hundreds and thousands of teams worldwide to achieve more.
        </motion.p>
      </div>

      {/* Gradient edges */}
      <GradientEdge side="left" />
      <GradientEdge side="right" />

      {/* Row 1 - Enhanced with better animation */}
      <motion.div
        ref={row1Ref}
        className="flex mb-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: scrollSpeed, 
          ease: "linear",
          repeatType: "loop"
        }}
        style={{ gap: `${gap}px` }}
      >
        {allImagesRow1.map((src, i) => (
          <motion.div
            key={`row1-${i}`}
            className={getImageClasses(i)}
            style={{ 
              width: imageSize, 
              height: imageSize,
              marginLeft: i === 0 ? gap : 0
            }}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <Image
              src={src}
              alt={`carousel-${i}`}
              width={imageSize}
              height={imageSize}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              priority={i < 4}
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 rounded-2xl" />
          </motion.div>
        ))}
      </motion.div>

      {/* Row 2 - Reverse direction with enhanced animation */}
      <motion.div
        ref={row2Ref}
        className="flex"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: scrollSpeed, 
          ease: "linear",
          repeatType: "loop"
        }}
        style={{ gap: `${gap}px` }}
      >
        {allImagesRow2.map((src, i) => (
          <motion.div
            key={`row2-${i}`}
            className={getImageClasses(i + 1000)}
            style={{ 
              width: imageSize, 
              height: imageSize,
              marginLeft: i === 0 ? gap : 0
            }}
            onMouseEnter={() => handleMouseEnter(i + 1000)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <Image
              src={src}
              alt={`carousel-${i}`}
              width={imageSize}
              height={imageSize}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              priority={i < 4}
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 rounded-2xl" />
          </motion.div>
        ))}
      </motion.div>

      {/* Stats section below carousel */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-6"
      >
        {[
          { number: "10K+", label: "Active Teams" },
          { number: "50M+", label: "Meetings Analyzed" },
          { number: "99.9%", label: "Uptime" },
          { number: "4.9/5", label: "Rating" }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
            >
              {stat.number}
            </motion.div>
            <div className="text-sm md:text-base text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>
      </div>
    </div>
  );
}